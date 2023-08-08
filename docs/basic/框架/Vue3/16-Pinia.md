# Pinia

## 1.pinia 是什么？

> **前言**
>
> Vue3 已经推出很长时间了，它周边的生态也是越来越完善了。之前我们使用 Vue2 的时候，Vuex 可以说是必备的，它作为一个状态管理工具，给我们带来了极大的方便。Vue3 推出后，虽然相对于 Vue2 很多东西都变了，但是核心的东西还是没有变的，比如说状态管理、路由等等。再 Vue3 种，尤大神推荐我们使用 pinia 来实现状态管理，他也说 pinia 就是 Vuex 的新版本。
>
> 那么 pinia 究竟是何方神圣，本篇文章带大家一起学透它！

如果你学过 Vue2，那么你一定使用过 Vuex。我们都知道 Vuex 在 Vue2 中主要充当状态管理的角色，所谓状态管理，简单来说就是一个存储数据的地方，存放在 Vuex 中的数据在各个组件中都能访问到，它是 Vue 生态中重要的组成部分。

既然 Vuex 那么重要，那么在 Vue3 中岂能丢弃！

在 Vue3 中，可以使用传统的 Vuex 来实现状态管理，也可以使用最新的 pinia 来实现状态管理，我们来看看官网如何解释 pinia 的。

**官网解释：**

> Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。

从上面官网的解释不难看出，pinia 和 Vuex 的作用是一样的，它也充当的是一个存储数据的作用，存储在 pinia 的数据允许我们在各个组件中使用。

实际上，pinia 就是 Vuex 的升级版，官网也说过，为了尊重原作者，所以取名 pinia，而没有取名 Vuex，所以大家可以直接将 pinia 比作为 Vue3 的 Vuex。

## 2.为什么要使用 pinia？

很多小伙伴内心是抗拒学习新东西的，比如我们这里所说的 pinia，很多小伙伴可能就会抛出一系列的疑问：为什么要学习 pinia？pinia 有什么优点吗？既然 Vue3 还能使用 Vuex 为什么我还要学它？......

针对上面一系列的问题，我相信很多刚开始学习 pinia 的小伙伴都会有，包括我自己当初也有这个疑问。当然，这些问题其实都有答案，我们不可能平白无故的而去学习一样东西吧！肯定它有自己的优点的，所以我们这里先给出 pinia 的优点，大家心里先有个大概，当你熟练使用它之后，在会过头来看这些优点，相信你能理解。

**优点：**

- Vue2 和 Vue3 都支持，这让我们同时使用 Vue2 和 Vue3 的小伙伴都能很快上手。
- pinia 中只有 state、getter、action，抛弃了 Vuex 中的 Mutation，Vuex 中 mutation 一直都不太受小伙伴们的待见，pinia 直接抛弃它了，这无疑减少了我们工作量。
- pinia 中 action 支持同步和异步，Vuex 不支持
- 良好的 Typescript 支持，毕竟我们 Vue3 都推荐使用 TS 来编写，这个时候使用 pinia 就非常合适了
- 无需再创建各个模块嵌套了，Vuex 中如果数据过多，我们通常分模块来进行管理，稍显麻烦，而 pinia 中每个 store 都是独立的，互相不影响。
- 体积非常小，只有 1KB 左右。
- pinia 支持插件来扩展自身功能。
- 支持服务端渲染。

pinia 的优点还有非常多，上面列出的主要是它的一些主要优点，更多细节的地方还需要大家在使用的时候慢慢体会。

## 3.准备工作

想要学习 pinia，最好有 Vue3 的基础，明白组合式 API 是什么。如果你还不会 Vue3，建议先去学习 Vue3。

本篇文章讲解 pinia 时，全部基于 Vue3 来讲解，至于 Vue2 中如何使用 pinia，小伙伴们可以自行去 pinia 官网学习，毕竟 Vue2 中使用 pinia 的还是少数。

**项目搭建：**

我们这里搭建一个最新的 Vue3 + TS + Vite 项目。

**执行命令：**

```shell
npm create vite@latest my-vite-app --template vue-ts
```

**运行项目：**

```shell
npm install
npm run dev
```

**安装 pinia：**

和 vue-router、vuex 等一样，我们想要使用 pinia 都需要先安装它，安装它也比较简单。

**安装命令：**

```shell
yarn add pinia
# 或者使用 npm
npm install pinia
```

安装完成后我们需要将 pinia 挂载到 Vue 应用中，也就是我们需要创建一个根存储传递给应用程序，简单来说就是创建一个存储数据的数据桶，放到应用程序中去。

修改 main.js，引入 pinia 提供的 createPinia 方法，创建根存储。

**代码如下：**

```typescript
// main.ts

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app')
```

## 4.创建和使用 store

**创建 store：**

store 简单来说就是数据仓库的意思，我们数据都放在 store 里面。当然你也可以把它理解为一个公共组件，只不过该公共组件只存放数据，这些数据我们其它所有的组件都能够访问且可以修改。

我们需要使用 pinia 提供的 defineStore()方法来创建一个 store，该 store 用来存放我们需要全局使用的数据。

首先在项目 src 目录下新建 store 文件夹，用来存放我们创建的各种 store，然后在该目录下新建 user.ts 文件，主要用来存放与 user 相关的 store。

在深入了解核心概念之前，我们需要知道 Store 是使用 `defineStore()` 定义的，并且它需要一个**唯一**名称，作为第一个参数传递：

**代码如下：**

```ts
;/src/eorst / user.ts

import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore('users', {
  // 其它配置项
})
```

创建 store 很简单，调用 pinia 中的 defineStore 函数即可，该函数接收两个参数：

- name：这个 _name_，也称为 _id_，是必要的，Pinia 使用它来将 store 连接到 devtools。 将返回的函数命名为 _use..._ 是跨可组合项的约定，以使其符合你的使用习惯。
- options：一个对象，store 的配置项，比如配置 store 内的数据，修改数据的方法等等。

我们可以定义任意数量的 store，因为我们其实一个 store 就是一个函数，这也是 pinia 的好处之一，让我们的代码扁平化了，这和 Vue3 的实现思想是一样的。

**使用 store:**

前面我们创建了一个 store，说白了就是创建了一个方法，那么我们的目的肯定是使用它，假如我们要在 App.vue 里面使用它，该如何使用呢？

**代码如下：**

```js
/src/App.vue
<script setup lang="ts">
import { useUsersStore } from "@/store/user";
const store = useUsersStore();
console.log(store);
</script>
```

使用 store 很简单，直接引入我们声明的 useUsersStore 方法即可。

一旦 store 被实例化，你就可以直接在 store 上访问 `state`、`getters` 和 `actions` 中定义的任何属性。

## 5.state

### 5.1 添加 state

我们都知道 store 是用来存放公共数据的，那么数据具体存在在哪里呢？前面我们利用 defineStore 函数创建了一个 store，该函数第二个参数是一个 options 配置项，我们需要存放的数据就放在 options 对象中的 state 属性内。

假设我们往 store 添加一些任务基本数据，修改 user.ts 代码。

**代码如下：**

```typescript
export const useUserStore = defineStore('users', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      name: 'dselegent',
      age: 21,
      sex: '男',
    }
  },
})
```

上段代码中我们给配置项添加了 state 属性，该属性就是用来存储数据的，我们往 state 中添加了 3 条数据。需要注意的是，state 接收的是一个箭头函数返回的值，它不能直接接收一个对象。

### 5.2 读取 state 数据

**代码如下：**

```typescript
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
const name = ref<string>(store.name);
const age = ref<number>(store.age);
const sex = ref<string>(store.sex);
</script>
```

上段代码中我们直接通过 store.age 等方式获取到了 store 存储的值，但是大家有没有发现，这样比较繁琐，我们其实可以用解构的方式来获取值，使得代码更简洁一点。

**解构代码如下：**

```typescript
import { useUsersStore } from '../src/store/user'
const store = useUsersStore()
const { name, age, sex } = store
```

上段代码实现的效果与一个一个获取的效果一样，不过代码简洁了很多。

### 5.3 修改 state 数据

如果我们想要修改 store 中的数据，可以直接重新赋值即可，我们在 App.vue 里面添加一个按钮，点击按钮修改 store 中的某一个数据。

**代码如下：**

```typescript
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="changeName">更改姓名</button>
</template>
<script setup lang="ts">
import child from './child.vue';
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
// ❌ 这不起作用，因为它会破坏响应式
    // 这和从 props 解构是一样的
const { name, age, sex } = store;
const changeName = () => {
  store.name = "张三";
  console.log(store);
};
</script>
```

上段代码新增了 changeName 方法，改变了 store 中 name 的值，但是页面上似乎没有变化，这说明我们的使用的 name 不是响应式的。

很多小伙伴可能会说那可以用监听函数啊，监听 store 变化，刷新页面...

其实，pinia 提供了方法给我们，让我们获得的 name 等属性变为响应式的，我们重新修改代码。

为了从 Store 中提取属性同时保持其响应式，您需要使用`storeToRefs()`。 它将为任何响应式属性创建 refs。 当您仅使用 store 中的状态但不调用任何操作时，这很有用：

**app.vue 代码修改如下：**

```typescript
import { storeToRefs } from 'pinia'
const store = useUsersStore()
// `name` `age` `sex` 是响应式引用
// 这也会为插件添加的属性创建引用
// 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
const { name, age, sex } = storeToRefs(store)
```

我们两个组件中获取 state 数据的方式都改为上段代码的形式，利用 pinia 的 storeToRefs 函数，将 sstate 中的数据变为了响应式的。

除此之外，我们也给 child.vue 也加上更改 state 数据的方法。

**child.vue 代码如下：**

```vue
<template>
  <h1>我是child组件</h1>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="changeName">更改姓名</button>
</template>
<script setup lang="ts">
import { useUsersStore } from '../src/store/user'
import { storeToRefs } from 'pinia'
const store = useUsersStore()
const { name, age, sex } = storeToRefs(store)
const changeName = () => {
  store.name = '瓜皮'
}
</script>
```

这个时候我们再来尝试分别点击两个组件的按钮， store 中数据发生变化时，页面也更新了！

### 5.4 重置 state

有时候我们修改了 state 数据，想要将它还原，这个时候该怎么做呢？就比如用户填写了一部分表单，突然想重置为最初始的状态。

此时，我们直接调用 store 的$reset()方法即可，继续使用我们的例子，添加一个重置按钮。

**代码如下：**

```js
<button @click="reset">重置store</button>
// 重置store
const reset = () => {
  store.$reset();
};
```

当我们点击重置按钮时，store 中的数据会变为初始状态，页面也会更新。

### 5.5 批量更改 state 数据

前面我们修改 state 的数据是都是一条一条修改的，比如 store.name="张三"等等，如果我们一次性需要修改很多条数据的话，有更加简便的方法，使用 store 的$patch 方法，修改 app.vue 代码，添加一个批量更改数据的方法。

**代码如下：**

```js
<button @click="patchStore">批量修改数据</button>
// 批量修改数据
const patchStore = () => {
  store.$patch({
    name: "张三",
    age: 100,
  });
};
```

有经验的小伙伴可能发现了，我们采用这种批量更改的方式似乎代价有一点大，假如我们 state 中有些字段无需更改，但是按照上段代码的写法，我们必须要将 state 中的所有字段例举出了。

为了解决该问题，pinia 提供的$patch 方法还可以接收一个回调函数，它的用法有点像我们的数组循环回调函数了。

**示例代码如下：**

```js
store.$patch((state) => {
  // state就是仓库的state函数返回值
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

上段代码中我们即批量更改了 state 的数据，又没有将所有的 state 字段列举出来。

### 5.6 直接替换整个 state

pinia 提供了方法让我们直接替换整个 state 对象，使用 store 的$state 方法。

**示例代码：**

```js
store.$state = { name: '1', age: 1, sex: '1' }
//$state您可以通过将store的属性设置为新对象来替换store的整个状态
//缺点就是必须修改整个对象的所有属性
```

上段代码会将我们提前声明的 state 替换为新的对象，可能这种场景用得比较少，这里我就不展开说明了。

> 字段必须要对的上，不能多不能少，类型也不能错

### 5.6 订阅 state 改变

类似于 Vuex 的 abscribe 只要有 state 的变化就会走这个函数

```ts
store.$subscribe((args, state) => {
  console.log(args, state, '数据改变')
})
```

第二个参数

如果你的组件卸载之后还想继续调用请设置第二个参数

```javascript
store.$subscribe(
  (args, state) => {
    console.log(args, state, '数据改变')
  },
  {
    detached: true,
  }
)
```

## 6.getters 属性

getters 是 defineStore 参数配置项里面的另一个属性，前面我们讲了 state 属性。getter 属性值是一个对象，该对象里面是各种各样的方法。大家可以把 getter 想象成 Vue 中的计算属性，它的作用就是返回一个新的结果，既然它和 Vue 中的计算属性类似，那么它肯定也是会被缓存的，就和 computed 一样。

当然我们这里的 getter 就是处理 state 数据。

### 6.1 添加 getter

我们先来看一下如何定义 getter 吧，修改 user.ts。

**代码如下：**

```js
export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      name: 'dselegent',
      age: 21,
      sex: '男',
    }
  },
  getters: {
    getAddAge: (state) => {
      return state.age + 100
    },
  },
})
```

上段代码中我们在配置项参数中添加了 getter 属性，该属性对象中定义了一个 getAddAge 方法，该方法会默认接收一个 state 参数，也就是 state 对象，然后该方法返回的是一个新的数据。

### 6.2 使用 getter

我们在 store 中定义了 getter，那么在组件中如何使用呢？使用起来非常简单，我们修改 App.vue。

**代码如下：**

```vue
<template>
  <p>新年龄：{{ store.getAddAge }}</p>
  <button @click="patchStore">批量修改数据</button>
</template>
<script setup lang="ts">
import { useUsersStore } from '../src/store/user'
const store = useUsersStore()
// 批量修改数据
const patchStore = () => {
  store.$patch({
    name: '张三',
    age: 100,
  })
}
</script>
```

上段代码中我们直接在标签上使用了 store.gettAddAge 方法，这样可以保证响应式，其实我们 state 中的 name 等属性也可以以此种方式直接在标签上使用，也可以保持响应式。

当我们点击批量修改数据按钮时，页面上的新年龄字段也会跟着变化。

### 6.3 getter 中调用其它 getter

前面我们的 getAddAge 方法只是简单的使用了 state 方法，但是有时候我们需要在这一个 getter 方法中调用其它 getter 方法，这个时候如何调用呢？

其实很简单，我们可以直接在 getter 方法中调用 this，this 指向的便是 store 实例，所以理所当然的能够调用到其它 getter。

**示例代码如下：**

```ts
export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      name: 'dselegent',
      age: 21,
      sex: '男',
    }
  },
  getters: {
    getAddAge: (state) => {
      return state.age + 100
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge // 调用其它getter
    },
  },
})
```

上段代码中我们又定义了一个名为 getNameAndAge 的 getter 函数，在函数内部直接使用了 this 来获取 state 数据以及调用其它 getter 函数。

> getters 可以互相调用 普通函数形式可以使用 this 使用箭头函数不能使用 this this 指向已经改变指向 undefined 修改值请用 state

细心的小伙伴可能会发现我们这里没有使用箭头函数的形式，这是因为我们在函数内部使用了 this，箭头函数的 this 指向问题相信大家都知道吧！所以这里我们没有采用箭头函数的形式。

那么在组件中调用的形式没什么变化，代码如下：

```html
<p>调用其它getter：{{ store.getNameAndAge }}</p>
```

### 6.4 getter 传参

既然 getter 函数做了一些计算或者处理，那么我们很可能会需要传递参数给 getter 函数，但是我们前面说 getter 函数就相当于 store 的计算属性，和 vue 的计算属性差不多，那么我们都知道 Vue 中计算属性是不能直接传递参数的，所以我们这里的 getter 函数如果要接受参数的话，也是需要做处理的。

**示例代码：**

```ts
export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      name: 'dselegent',
      age: 21,
      sex: '男',
    }
  },
  getters: {
    getAddAge: (state) => {
      return (num: number) => state.age + num
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge // 调用其它getter
    },
  },
})
```

上段代码中我们 getter 函数 getAddAge 接收了一个参数 num，这种写法其实有点闭包的概念在里面了，相当于我们整体返回了一个新的函数，并且将 state 传入了新的函数。

接下来我们在组件中使用，方式很简单，代码如下：

```html
<p>新年龄：{{ store.getAddAge(1100) }}</p>
```

### 6.5 访问其他 Store 的 getter[#](https://pinia.web3doc.top/core-concepts/getters.html#访问其他-store-的getter)

要使用其他存储 getter，您可以直接在 _getter_ 内部使用它：

```tsx
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

## 7.actions 属性

前面我们提到的 state 和 getters 属性都主要是数据层面的，并没有具体的业务逻辑代码，它们两个就和我们组件代码中的 data 数据和 computed 计算属性一样。

那么，如果我们有业务代码的话，最好就是卸载 actions 属性里面，该属性就和我们组件代码中的 methods 相似，用来放置一些处理业务逻辑的方法。

actions 属性值同样是一个对象，该对象里面也是存储的各种各样的方法，包括同步方法和异步方法。

### 7.1 添加 actions

我们可以尝试着添加一个 actions 方法，修改 user.ts。

**代码如下：**

```ts
export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      name: '小猪课堂',
      age: 25,
      sex: '男',
    }
  },
  getters: {
    getAddAge: (state) => {
      return (num: number) => state.age + num
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge // 调用其它getter
    },
  },
  actions: {
    saveName(name: string) {
      this.name = name
    },
  },
})
```

上段代码中我们定义了一个非常简单的 actions 方法，在实际场景中，该方法可以是任何逻辑，比如发送请求、存储 token 等等。大家把 actions 方法当作一个普通的方法即可，特殊之处在于该方法内部的 this 指向的是当前 store。

### 7.2 使用 actions

使用 actions 中的方法也非常简单，比如我们在 App.vue 中想要调用该方法。

**代码如下：**

```ts
const saveName = () => {
  store.saveName('我是小猪')
}
```

我们点击按钮，直接调用 store 中的 actions 方法即可。

### 7.3 订阅 Actions 的调用

只要有 actions 被调用就会走这个函数

```ts
store.$onAction((args) => {
  console.log(args, 'action调用')
})
```

## 8.pinia 模块化

> 在复杂项目中，不可能把多个模块的数据都定义到一个 store 中，一般来说会一个模块对应一个 store，最后通过一个根 store 进行整合

（1）新建 store/user.js 文件

```ts
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'zs',
      age: 100,
    }
  },
})

export default useUserStore
```

(2)新建 store/index.js

```ts
import useUserStore from './user'
import useCounterStore from './counter'

// 统一导出useStore方法
export default function useStore() {
  return {
    user: useUserStore(),
    counter: useCounterStore(),
  }
}
```

（3）在组件中使用

```ts
<script setup>
  import {storeToRefs} from 'pinia' import useStore from './store' const{' '}
  {counter} = useStore() // 使用storeToRefs可以保证解构出来的数据也是响应式的
  const {(count, double)} = storeToRefs(counter)
</script>
```

## 9.pinia 数据持久化

**目标：** 通过 Pinia 插件快速实现持久化存储。

插件文档：[点击查看](https://www.npmjs.com/package/pinia-plugin-persistedstate)

### 9.1 用法

**安装**

```shell
yarn add pinia-plugin-persistedstate
or
npm i  pinia-plugin-persistedstate
```

**使用插件** 在 main.ts 中注册

```ts
import { createApp } from 'vue'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia)
```

**模块开启持久化**

```ts
const useHomeStore = defineStore('home', {
  // 开启数据持久化
  persist: true,
  // ...省略
})
```

### 9.2 常见疑问

- 模块做了持久化后，以后数据会不会变，怎么办？
  - 先读取本地的数据，如果新的请求获取到新数据，会自动把新数据覆盖掉旧的数据。
  - 无需额外处理，插件会自己更新到最新数据。

### 9.3 进阶用法

需求：不想所有数据都持久化处理，能不能按需持久化所需数据，怎么办？

- 可以用配置式写法，按需缓存某些模块的数据。

```ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      someState: 'hello pinia',
      nested: {
        data: 'nested pinia',
      },
    }
  },
  // 所有数据持久化
  // persist: true,
  // 持久化存储插件其他配置
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'storekey',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['nested.data'],
  },
})
```

> 总结：相比于 vuex，pinia 对于 typescript 的支持性更好，友好的 devTools 支持，pinia 只有 1kb，简化了很多方法的写法。
