# HTTP 模块

## 含义

是 Node.js 官方提供的用来创建 web 服务器的模块。通过 `http.createServer()`方法就可以将一台普通电脑变成 web 服务器，从而对外提供 web 资源服务。所以在 Node.js 中，我们不需要使用 IIS、Apache 等第三方 web 服务器软件，可以用 http 模块手撸一个服务器。

## 服务器相关概念

- ⅰ. ip 地址：互联网上每台计算机的唯一地址。格式为点分十进制。
- ⅱ. 域名：127.0.0.1 的域名为 `localhost`。
- ⅲ. 域名服务器：ip 地址和域名是一一对应的，这些信息存储在域名服务器 DNS 中。
- ⅳ. 端口号：类似于门牌号。端口号和 web 服务是一对一的关系，每个端口号不能同时被多个 web 服务占用。在实际应用中，url 中的 `80` 端口是可以被省略的，其他端口号不可省略。

## 创建 Web 服务器

- ⅰ. 导入：`const http = require( 'http')`
- ⅱ. 创建 web 服务实例：`const server = http.createServero`
- ⅲ. 为服务器实例绑定 request 事件：on()方法用来绑定事件，第一参数为具体事件。

```
// 使用服务器实例的 .on() 方法,为服务器绑定一个 request 事件
server.on('request'. (req, res) => {
    // 只要有客户端来请求我们自己的服务器,就会触发request事件，从而调用这个事件处理函数
    console.log('Someone visit our web server. ')
})

// ① req 请求对象：包含了与客户端相关的数据和属性。如 req.url 是客户端请求的 url 地址，req.method 是客户端请求的 method 类型(get 或 post)。
// ② res 响应对象：包含了与服务器相关的数据和属性。res.end() 方法响应客户端。
```

- ⅳ. 启动服务器：

```
// 调用server.listen(端口号,cb回调)方法，即可启动 web服务器
server.listen(80, () => {
    console.log( 'http server running at http://127.0.0.1')
})
```

## 根据不同 url 响应不同 html 内容

```
server.on("request", function(req,res) {
    const url = req.url // 1. 获取请求的url地址
    let content = '<h1>404 Not found!</h1>' // 2. 设置默认的内客为 404 Not found
    if (url === '/' || url === '/index.html') {
        content = "<h1>首页</h1>' // 3. 用户请求的是首页
    else if (url === '/about.html') {
        content = "<h1>关于页面</h1>' // 4. 用户请求的是关于页面
    }
    res.setHeader('Content-Type' ,'text/html;charset=utf-8') // 5. 设置 Content-Type响应头，防止中文乱码
    res.end(content) // 6. 把内容发送给客户端
})
```
