# MVVM 软件架构

## Vue 的两大特性

- 数据驱动视图：页面数据发生变化时，vue 会自动渲染页面结构。这是单向的数据绑定
  ![avatar](/images/数据驱动视图.png)
- 双向数据绑定：js 数据的变化会被自动渲染到页面；页面上表单采集的数据变化时会被 vue 同步到 js 数据中。
  ![avatar](/images/双向数据绑定.png)

## MVVM 核心原理

ViewModel 作为 MVVM 的核心，是它把当前页面的数据源（Model）和页面结构（View）连接在一起。
![avatar](/images/MVVM工作原理.png)

- 当 Model 发生变化，会被 ViewModel 监听到，自动更新到 View。
- 当 表单元素的值发生变化，也会被 ViewModel 监听到，将其自动同步到 Model 中。
