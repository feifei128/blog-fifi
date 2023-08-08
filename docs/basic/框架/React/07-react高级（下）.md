# react 高级指引（下）

## 1.组件优化

### 1.1 shouldComponentUpdate 优化

在我们之前一直写的代码中，我们一直使用的`Component` 是有问题存在的

1. 只要执行 `setState` ，即使不改变状态数据，组件也会调用 `render`
2. 当前组件状态更新，也会引起子组件 `render`

而我们想要的是只有组件的 `state` 或者 `props` 数据发生改变的时候，再调用 `render`

我们可以采用重写 `shouldComponentUpdate` 的方法，但是这个方法不能根治这个问题，当状态很多时，我们没有办法增加判断

看个案例来了解下原理：

如果你的组件只有当 `props.color` 或者 `state.count` 的值改变才需要更新时，你可以使用 `shouldComponentUpdate` 来进行检查：

```jsx
class CounterButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true
    }
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    )
  }
}
```

在这段代码中，`shouldComponentUpdate` 仅检查了 `props.color` 或 `state.count` 是否改变。如果这些值没有改变，那么这个组件不会更新。如果你的组件更复杂一些，你可以使用类似“浅比较”的模式来检查 `props` 和 `state` 中所有的字段，以此来决定是否组件需要更新。React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承 `React.PureComponent` 就行了。

### 1.2 PureComponent 优化

这段代码可以改成以下这种更简洁的形式：

```jsx
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
```

大部分情况下，你可以使用 `React.PureComponent` 来代替手写 `shouldComponentUpdate`。但它只进行浅比较，所以当 props 或者 state 某种程度是可变的话，浅比较会有遗漏，那你就不能使用它了。当数据结构很复杂时，情况会变得麻烦。

> `PureComponent` 会对比当前对象和下一个状态的 `prop` 和 `state` ，而这个比较属于浅比较，比较基本数据类型是否相同，而对于引用数据类型，**比较的是它的引用地址是否相同，这个比较与内容无关**

```js
state = { stus: ['小张', '小李', '小王'] }

addStu = () => {
  /* const {stus} = this.state
    stus.unshift('小刘')
    this.setState({stus}) */

  const { stus } = this.state
  this.setState({ stus: ['小刘', ...stus] })
}
```

注释掉的那部分，我们是用`unshift`方法为`stus`数组添加了一项，它本身的地址是不变的，这样的话会被当做没有产生变化(因为引用数据类型比较的是地址)，所以我们平时都是采用合并数组的方式去更新数组。

### 1.3 案例

```jsx
import React, { PureComponent } from 'react'
import './index.css'

export default class A extends PureComponent {
  state = {
    username: '张三',
  }

  handleClick = () => {
    this.setState({})
  }

  render() {
    console.log('A:enter render()')
    const { username } = this.state
    const { handleClick } = this

    return (
      <div className="a">
        <div>我是组件A</div>
        <span>我的username是{username}</span>&nbsp;&nbsp;
        <button onClick={handleClick}>执行setState且不改变状态数据</button>
        <B />
      </div>
    )
  }
}

class B extends PureComponent {
  render() {
    console.log('B:enter render()')
    return (
      <div className="b">
        <div>我是组件B</div>
      </div>
    )
  }
}
```

点击按钮后不会有任何变化，render 函数也没有调用

修改代码如下：

```js
handleClick = () => {
  this.setState({
    username: '李四',
  })
}
```

点击按钮后只有组件 A 的 `render` 函数会调用

再次修改代码如下：

```js
handleClick = () => {
  const { state } = this
  state.username = '李四'
  this.setState(state)
}
```

现在，点击后不会有任何变化，`render` 函数没有调用，这个时候其实是`shouldComponentUpdate` 返回的 `false`。

## 2.Render Props

**如何向组件内部动态传入带内容的结构(标签)?**

```css
Vue中:
	使用slot技术, 也就是通过组件标签体传入结构  <AA><BB/></AA>
React中:
	使用children props: 通过组件标签体传入结构
	使用render props: 通过组件标签属性传入结构, 一般用render函数属性
```

**children props**

```jsx
render() {
    return (
            <A>
              <B>xxxx</B>
            </A>
    )
}


问题: 如果B组件需要A组件内的数据, ==> 做不到
```

术语 [“render prop”](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

采用 render props 技术，我们可以像组件内部动态传入带有内容的结构

> 当我们在一个组件标签中填写内容时，这个内容会被定义为 children props，我们可以通过 `this.props.children` 来获取

例如：

```html
<a>hello</a>
```

这个 hello 我们就可以通过 children 来获取

而我们所说的 render props 就是在组件标签中传入一个 render 方法(名字可以自己定义，这个名字更语义化)，又因为属于 props ，因而被叫做了 render props

```jsx
<A render={(name) => <B name={name} />} />
A组件: {this.props.render(内部state数据)}
B组件: 读取A组件传入的数据显示 {this.props.data}
```

你可以把 `render` 看作是 `props`，只是它有特殊作用，当然它也可以用其他名字来命名

在上面的代码中，我们需要在 A 组件中预留出 B 组件渲染的位置 在需要的位置上加上`{this.props.render(name)}`

那我们在 B 组件中，如何接收 A 组件传递的 `name` 值呢？通过 `this.props.name` 的方式

```jsx
export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <A render={(name) => <B name={name} />} />
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    console.log(this.props)
    const { name } = this.state
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log('B--render')
    return (
      <div className="b">
        <h3>我是B组件,{this.props.name}</h3>
      </div>
    )
  }
}
```

## 3.Portal

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

> 李立超老师的博客
>
> 这篇博客对于 Portal 的引出我觉得写的很好
>
> [portal – 李立超 | lilichao.com](https://www.lilichao.com/index.php/2022/03/22/portal/)

### 3.1 Portal 的用法

1. 在 index.html 中添加一个新的元素
2. 在组件中中通过 ReactDOM.createPortal()将元素渲染到新建的元素中

在 index.html 中添加新元素：

```html
<div id="backdrop"></div>
```

修改 Backdrop 组件：

```jsx
const backdropDOM = document.getElementById('backdrop')

const Backdrop = () => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,.3)',
      }}
    ></div>,
    backdropDOM
  )
}
```

如此一来，我们虽然是在 Box 中引入了 Backdrop，但是由于在 Backdrop 中开启了“传送门”，Backdrop 就会直接渲染到网页中 id 为 backdrop 的 div 中，这样一来上边的问题就解决了

### 3.2 通过 Portal 进行事件冒泡

尽管 portal 可以被放置在 DOM 树中的任何地方，但在任何其他方面，其行为和普通的 React 子节点行为一致。由于 portal 仍存在于 _React 树_， 且与 _DOM 树_ 中的位置无关，那么无论其子节点是否是 portal，像 context 这样的功能特性都是不变的。

这包含事件冒泡。一个从 portal 内部触发的事件会一直冒泡至包含 *React 树*的祖先，即便这些元素并不是 _DOM 树_ 中的祖先。假设存在如下 HTML 结构：

```html
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

在 `#app-root` 里的 `Parent` 组件能够捕获到未被捕获的从兄弟节点 `#modal-root` 冒泡上来的事件。

```jsx
// 在 DOM 中有两个容器是兄弟级 （siblings）
const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  )
}

const root = ReactDOM.createRoot(appRoot)
root.render(<Parent />)
```

点击 click 后,可以发现数字从 0 变成 1 了

子组件 `Child` 的点击事件能冒泡到父组件 `Parent`，触发父元素的点击事件

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/jGBWpE)

在父组件里捕获一个来自 portal 冒泡上来的事件，使之能够在开发时具有不完全依赖于 portal 的更为灵活的抽象。例如，如果你在渲染一个 `<Modal />` 组件，无论其是否采用 portal 实现，父组件都能够捕获其事件。
