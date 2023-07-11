---
title: 03-网络抓包和代理工具：Whistle
---

<ArticleTopAd></ArticleTopAd>

## Whistle 官网

- Whistle 官网：<https://wproxy.org/whistle/>

- Whistle 的 GitHub：<https://github.com/avwo/whistle>

## Whistle 安装启动

### 1、Whistle 安装

（1）通过 npm 安装 Whistle

### 2、启动 whistle

```bash
w2 start
```

然后在浏览器输入`http://127.0.0.1:8899/` 即可打开代理配置的页面。

### 3、配置代理

**chrome 浏览器配置代理**：

可参考官方文档。

**Firefox 浏览器配置代理**：

![](https://img.smyhvae.com/20200420_1357.png)

### 4、安装证书并添加信任：

![](https://img.smyhvae.com/20200420_0922.png)

### 手机设置代理

连接好指定的 wifi 后，点击那个 wifi 里的设置，将「代理」那一项，设置为手动，然后输入 ip（电脑上的 ip）、端口号（8899）。然后就可以通过电脑上的 whistle 工具，查看手机的网页请求。

注意，要保证手机和电脑在同一个网络下。

另外，还需要在手机的浏览器，地址栏输入`rootca.pro`，给手机安装证书。

## 捕获和拦截 https 请求

whistle 安装证书后，可以拦截 https 请求。但是，我现在又不想拦截 https 请求了，该怎么卸载证书呢？

我发现，证书无法卸载，正确的操作是：

![](http://img.smyhvae.com/20180426_1621.png)

上图中，把红框部分，去掉勾选，就不捕获 https 了。谢谢 azh 童鞋。

参考链接：

- [Android 手机如何设置 http 代理？](https://www.zhihu.com/question/21474174)

- [使用 Whistle 对 iOS HTTPS 进行抓包](http://zhuscat.com/2017/09/20/https-proxy-on-ios/)

## 移动端调试神器:eruda

> 手机连接代理时，如何看 console.log 的日志信息?

> 现在，代码里有 console.log，如果是在电脑浏览器上看，可以直接在控制台查看 console.log 的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看 console.log 的内容呢？具体做法如下：

（1）在 whistle 中，新建一个名叫`Eruda H5`的代理，代理中的内容是：

```
http://xxx.com htmlAppend://{eruda.html}
```

(2)新建一个 values，里面的内容是：

```html
<script src="//cdn.bootcss.com/eruda/1.4.3/eruda.min.js"></script>
<script>
  eruda.init()
</script>
```

然后就 OK 了。
