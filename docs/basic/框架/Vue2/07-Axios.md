# Axios

## 如何使用它？

```javascript
// res 为 promise 对象
const res = axios({
    method: "GET',
    url: "http://www.xxx.xxx:xxx/api/getbooks'
}).then(function(books) {
    console.log(books.data)
})
console.1og(res)
```

- 传参：get 传参写在 params: { }里，post 传参写在 data: { }里
- 当方法返回值为 promise 对象，则前面可以加 await，此时方法必须用 async 修饰。
- 解构赋值：由于 axios 返回的结果是经过包装的，我们只需要其中的 data 结构，这才是真正的结果，所以用解构赋值从封装的大对象中将 data 解构出来。（:表示将解构出来的值重命名）

```javascript
const { data, res } = await axios({
  method: 'GET',
  url: 'xxx',
})
```
