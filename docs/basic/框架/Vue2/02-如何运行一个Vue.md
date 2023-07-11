# 如何运行一个简易的 Vue？

## 下载

Vue2 的下载地址：https://v2.vuejs.org/v2/guide/installation.html

## 导入 vue.js 的 script 脚本文件

```javascript
<script src="../lib/vue-2.6.12.js"></script>
```

## 声明一个将被 vue 控制的 DOM 区域

```html
<div id="app">{{ username}}</div>
```

## 创建 vm 实例对象

```javascript
<script>
    const vm = new Vue({
        // el 属性表示要控制的区域，接收值为选择器
        el: '#app',
        // data 为要渲染的数据
        data: {
            username: 'zhangsan'
        }
    })
</script>
```

## Run

- 为你的 Chrome 安装 Vue.js devtools 扩展
- 运行网页->F12->vue->root->修改数据，直接响应到页面。

  ![avatar](/images/简易Vue执行结果.png)
