# Attributes 继承

### 1.1 Attributes 继承

#### 1.1.1 Attributes 继承的基本概念

“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 [props](https://staging-cn.vuejs.org/guide/components/props.html) 或 [emits](https://staging-cn.vuejs.org/guide/components/events.html#defining-custom-events) 的 attribute 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。举例来说，假如我们有一个 `<MyButton>` 的子组件，它的模板长这样：

```vue
<!-- <MyButton> 的模板 -->
<button>click me</button>
```

一个**父组件**使用了这个组件，并且传入了 `class`：

```vue
<MyButton class="large" />
```

最后渲染出的 DOM 结果是：

```html
<button class="large">click me</button>
```

这里，`<MyButton>` 并没有将 `class` 声明为一个它所接受的 prop，所以 `class` 被视作`透传 attribute`，自动透传到了 `<MyButton>` 的根元素上。

#### 1.1.2 对 `class` 和 `style` 的合并

如果一个子组件的根元素已经有了 `class` 或 `style` attribute，它会和从父组件上继承的值合并。如果我们将之前的 `<MyButton>` 组件的模板改成这样：

```html
<!-- <MyButton> 的模板 -->
<button class="btn">click me</button>
```

**父组件**

```vue
<MyButton class="large" />
```

则最后渲染出的 DOM 结果会变成：

```html
<button class="btn large">click me</button>
```

#### 1.1.3 `v-on` 监听器继承

同样的规则也适用于 `v-on` 事件监听器：

```vue
<MyButton @click="onClick" />
```

`click` 监听器会被添加到 `<MyButton>` 的根元素，即那个原生的 `<button>` 元素之上。当原生的 `<button>` 被点击，会触发父组件的 `onClick` 方法。同样的，如果原生 `button` 元素自身也通过 `v-on` 绑定了一个事件监听器，则这个监听器和从父组件继承的监听器都会被触发。

#### 1.1.4 深层组件继承

有些情况下一个组件会在根节点上渲染另一个组件。例如，我们重构一下 `<MyButton>`，让它在根节点上渲染 `<BaseButton>`：

`MyButton.vue`

```vue
<template>
  <!-- <MyButton/> 的模板，只是渲染另一个组件 -->
  <BaseButton />
</template>
```

此时 `<MyButton>` 接收的透传 attribute 会直接继续传给 `<BaseButton>`。

请注意：

1. 透传的 attribute 不会包含 `<MyButton>` 上声明过的 props 或是针对 `emits` 声明事件的 `v-on` 侦听函数，换句话说，声明过的 props 和侦听函数被 `<MyButton>`“消费”了。
2. 透传的 attribute 若符合声明，也可以作为 props 传入 `<BaseButton>`。

### 1.2 禁用 Attributes 继承

如果你**不想要**一个组件自动地继承 attribute，你可以在组件选项中设置 `inheritAttrs: false`。

如果你使用了 `<script setup>`，你需要一个额外的 `<script>` 块来书写这个选项声明：

```vue
<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false,
}
</script>

<script setup>
// ...setup 部分逻辑
</script>
```

最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 `inheritAttrs` 选项为 `false`，你可以完全控制透传进来的 attribute 被如何使用。

这些透传进来的 attribute 可以在模板的表达式中直接用 `$attrs` 访问到。

```js
<span>Fallthrough attribute: {{ $attrs }}</span>
```

这个 `$attrs` 对象包含了除组件所声明的 `props` 和 `emits` 之外的所有其他 attribute，例如 `class`，`style`，`v-on` 监听器等等。

有几点需要注意：

- 和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 `foo-bar` 这样的一个 attribute 需要通过 `$attrs['foo-bar']` 来访问。
- 像 `@click` 这样的一个 `v-on` 事件监听器将在此对象下被暴露为一个函数 `$attrs.onClick`。

现在我们要再次使用一下[之前小节](https://staging-cn.vuejs.org/guide/components/attrs.html#attribute-inheritance)中的 `<MyButton>` 组件例子。有时候我们可能为了样式，需要在 `<button>` 元素外包装一层 `<div>`：

```vue
<div class="btn-wrapper">
  <button class="btn">click me</button>
</div>
```

我们想要所有像 `class` 和 `v-on` 监听器这样的透传 attribute 都应用在内部的 `<button>` 上而不是外层的 `<div>` 上。我们可以通过设定 `inheritAttrs: false` 和使用 `v-bind="$attrs"` 来实现：

```vue
<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>
```

小提示：[没有参数的 `v-bind`](https://staging-cn.vuejs.org/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes) 会将一个对象的所有属性都作为 attribute 应用到目标元素上。

**完整版**

`App.vue`

```vue
<script setup>
import { ref } from 'vue'
import MyButton from './MyButton.vue'
const msg = ref('Hello World!')
</script>

<template>
  <MyButton class="btn"></MyButton>
</template>
<style>
.btn {
  background-color: red;
}
</style>
```

`MyButton.vue`

```vue
<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false,
}
</script>

<script setup>
// ...setup 部分逻辑
</script>

<template>
  <!--<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>
-->
  <div class="btn-wrapper">
    <button :class="$attrs['class']">click me</button>
  </div>
</template>
```

![image-20220808231521594](https://i0.hdslb.com/bfs/album/733219e50d6f149ddec431eca8b24c48f359e36c.png)

### 1.3 多根节点的 Attributes 继承

和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 `$attrs` 没有被显式绑定，将会抛出一个运行时警告。

```vue
<MyButton id="custom-layout" @click="changeValue" />
```

如果 `<MyButton>` 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。

```vue
<div class="btn-wrapper">
  		<button >click me</button>
   </div>
<div class="btn-wrapper">
  		<button >click me</button>
   </div>
<div class="btn-wrapper">
  		<button >click me</button>
   </div>
```

![image-20220808232142732](https://i0.hdslb.com/bfs/album/abedff9e473e94ee838ea51b25935ab6dae0aa9c.png)

如果 `$attrs` 被显式绑定，则不会有警告：

```vue
<div class="btn-wrapper">
  		<button >click me</button>
   </div>
<div class="btn-wrapper">
  		<button v-bind="$attrs">click me</button>
   </div>
<div class="btn-wrapper">
  		<button >click me</button>
   </div>
```

![image-20220808232242645](https://i0.hdslb.com/bfs/album/868f6a56087bf52386b73dfcd668a5df7618a9df.png)

### 1.4 在 js 中访问透传 Attributes

如果需要，你可以在 `<script setup>` 中使用 `useAttrs()` API 来访问一个组件的所有透传 attribute：

```vue
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
alert(JSON.stringify(attrs))
</script>
```

![image-20220808232504160](https://i0.hdslb.com/bfs/album/53d05b7bd3075f45a3318281b6a390d9f88418e9.png)

如果没有使用 `<script setup>`，`attrs` 会作为 `setup()` 上下文对象的一个属性暴露：

```js
export default {
  setup(props, ctx) {
    // 透传 attribute 被暴露为 ctx.attrs
    console.log(ctx.attrs)
  },
}
```

需要注意的是，虽然这里的 `attrs` 对象总是反映为最新的透传 attribute，但它并不是响应式的 (考虑到性能因素)。你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 prop。或者你也可以使用 `onUpdated()` 使得在每次更新时结合最新的 `attrs` 执行副作用。
