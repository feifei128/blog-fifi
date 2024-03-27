# 第三方发送Ajax

## jQuery

1. 导入jQuery

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

2. get 和 post 方法（以下 3 个参数分别表示：url、参数和回调，还有第 4 参数，可以设置 'json'。下图的请求方式为 get，若要 post 直接替换。）

  ![](/images/ajax4.png)

3. 通用的写法如下

  ![](/images/ajax5.png)

## Axios

1. 导入：

```js
<script crossorigin="anonymous"  src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.js"></script>
```

2. get 请求（要处理响应结果就用 then 方法）

  ![](/images/ajax6.png)

3. post 请求（三个参数分别表示：url、请求体和其他配置）

  ![](/images/ajax7.png)

4. 通用方法：Axios函数发送Ajax请求

  ![](/images/ajax8.png)

## Fetch

  ![](/images/ajax9.png)
