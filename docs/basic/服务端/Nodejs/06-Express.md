# Express

## 含义

基于 Node.js 的 Web 开发框架。

## 创建服务器流程

- ⅰ. 安装

```
npm i express
```

- ⅱ. 导入

```
const express = require('express')
```

- ⅲ. 创建 web 服务器

```
const app = express()
```

- ⅳ. 启动服务器

```
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
```

## Express 基本方法

- ⅰ. `app.get()`：可以监听客户端 GET 请求。
- ⅱ. `app.post()`：可以监听客户端 POST 请求。
- ⅲ. `res.send()`：响应客户端。
- ⅳ. `req.query()`：存储链接传值中的变量。
- ⅴ. `req.param()`：存储 url 中通过 “：” 匹配的动态参数

## 托管静态资源

- ⅰ. `express.static()`：创建一个静态资源服务器，参数为文件夹名称。代码如下：
  ```
  app.use(express.static('public'))
  ```
- ⅱ. 托管多个静态资源目录：上述代码写两次就可以了。先写的优先级更高。
  ```
  app.use(express.static('public'))
  app.use(express.static('files'))
  ```
- ⅲ. 挂载路径前缀：若不挂载，访问路径 url 中是不存在静态资源目录的。

  ```
  app.use('/public', express.static('public'))
  ```
