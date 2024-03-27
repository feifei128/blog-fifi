# 原生Ajax

> 使用 XMLHttpRequest (XHR) 对象可以与服务器交互, 也就是发送 Ajax 请求。 Ajax 的所有操作都是通过该对象进行的

## Ajax基本操作

```js
// 1. 创建xml对象
const xhr = new XMLHttpRequest();
// 2. 设置请求方法和 url
xhr.open(method, url);
// 3. 可以设置请求头，一般不设置
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 4. get请求不传 body 参数，只有post请求使用
xhr.send(body) 
// 5. 事件绑定 处理服务端返回的结果
//    on  when 当....时候
//    readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
//    状态 0 表示未初始化  1 open方法调用完毕 2 send方法已经调用完毕 3 服务端返回部分结果 4 服务端返回了所有结果
//    change  改变
xhr.onreadystatechange = function (){
     //判断 (服务端返回了所有的结果)
    if(xhr.readyState == 4 && xhr.status == 200){
          console.log(xhr.status);//状态码
           console.log(xhr.statusText);//状态字符串
           console.log(xhr.getAllResponseHeaders());//所有响应头
           console.log(xhr.response);//响应体
    }
}
```

### 如果请求方式为 GET

url参数可以这样设置（链接传值，用?开头，多参数用&分隔）

```js
xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
```

### 如果请求方式为 POST

```js
      //  创建对象
      const xhr = new XMLHttpRequest();
      // 2. 初始化 设置类型（请求方式）与url
      xhr.open('POST', 'http://127.0.0.1:8000/server');
      //设置请求头
       xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    // 自定义头信息
      xhr.setRequesHeader('name', 'ykyk');
      // 3. 发送   设置请求参数（请求体）
      xhr.send('a=100&b=200&c=300');
      // 4. 事件绑定
      xhr.onreadystatechange = function(){
        // 判断
        if(xhr.readyState === 4){
          if(xhr.status >=200 && xhr.status < 300){
            // 处理服务端返回的结果
            result.innerHTML = xhr.response;
          }
        }
```

## 常用API

- `XMLHttpRequest()`：创建 XHR 对象的构造函数
- `status`：响应状态码值，如 200、404
-  `statusText`：响应状态文本，如 ’ok‘、‘not found’
-  `readyState`：标识请求状态的只读属性 0-1-2-3-4
-  `onreadystatechange`：绑定 readyState 改变的监听
-  `responseType`：指定响应数据类型，如果是 ‘json’，得到响应后自动解析响应
-  `response`：响应体数据，类型取决于 responseType 的指定
-  `timeout`：指定请求超时时间，默认为 0 代表没有限制
-  `ontimeout`：绑定超时的监听
-  `onerror`：绑定请求网络错误的监听
-  `open()`：初始化一个请求，参数为：(method, url[, async])
-  `send(data)`：发送请求
-  `abort()`：中断请求 （发出到返回之间）
-  `getResponseHeader(name)`：获取指定名称的响应头值
-  `getAllResponseHeaders()`：获取所有响应头组成的字符串
-  `setRequestHeader(name, value)`：设置请求头

## 特别处理

### 1.   IE缓存问题

**问题描述**：IE会对Ajax请求进行缓存，从而每次响应的时候是从缓存列表进行的而不是客户端正在发送的请求，不适宜时效性高的场景。

**解决方法**：在前端的open方法中加入时间戳的参数。

```js
xhr.open('GET', 'http://127.0.0.1:8000/ie?t='Date.now());
```

### 2.   请求超时与网络异常

**问题描述**：假设有这样一个需求，当一个请求超过2秒钟还没有完成，则返回一个请求超时。

**写法**：在前端做一个超时设置。

```js
// 超时设置 2s
xhr.timeout = 2000;
// 超时回调
xhr.ontimeout = function() {
  alert("网络异常，请稍后重试！！")
}
```

### 3.   取消请求

**问题描述**：当一个 Ajax 请求还没有得到响应，此时想要手动取消请求的发送。
**写法**：对 xml 对象调用 abort 方法。
```js
x.abort();
```

### 4.   重复发送请求问题

**问题描述**：当用户不断发送同一个请求时，服务器压力会很大，为此提出一个解决方法，若当前发送的请求与之前是重复的，则取消掉之前发送的重复请求，保留当前的新请求。

**解决方法**（在前端）：

  1. 增加标识变量

  ```js
  let isSending = false;
  ```

  2. 若请求发送了，将标识变量置为 true；若响应完成，将标识变量置为 false。

  3. 在每次请求之前，判断标识变量是否为 true，若是则手动取消当前的请求，也就是 abort 一下。

  ![](/images/ajax3.png)
