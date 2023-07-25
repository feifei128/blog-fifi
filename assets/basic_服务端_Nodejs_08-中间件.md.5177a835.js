import{_ as s,c as a,o as e,V as n}from"./chunks/framework.987d87f6.js";const l="/blog-fifi/images/中间件.png",g=JSON.parse('{"title":"中间件","description":"","frontmatter":{},"headers":[],"relativePath":"basic/服务端/Nodejs/08-中间件.md","filePath":"basic/服务端/Nodejs/08-中间件.md"}'),p={name:"basic/服务端/Nodejs/08-中间件.md"},o=n('<h1 id="中间件" tabindex="-1">中间件 <a class="header-anchor" href="#中间件" aria-label="Permalink to &quot;中间件&quot;">​</a></h1><h2 id="含义" tabindex="-1">含义 <a class="header-anchor" href="#含义" aria-label="Permalink to &quot;含义&quot;">​</a></h2><p>本质上是一个 function 处理函数，只是形参比较特殊。</p><p><img src="'+l+`" alt="avatar"></p><p>作用：多个中间件之间，共享同一份 req 和 res。所以上游中间件的属性和方法可供下游使用。</p><h2 id="next-函数" tabindex="-1">next 函数 <a class="header-anchor" href="#next-函数" aria-label="Permalink to &quot;next 函数&quot;">​</a></h2><p>实现多个中间件连续调用，它表示把流转关系转交给下一个中间件或路由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义一个最简单的中间件函数</span></span>
<span class="line"><span style="color:#A6ACCD;">const mw = function (req, res, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;这是最简单的中间件函数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 把流转关系，转交给下一个中间件或路由</span></span>
<span class="line"><span style="color:#A6ACCD;">    next()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="全局生效中间件" tabindex="-1">全局生效中间件 <a class="header-anchor" href="#全局生效中间件" aria-label="Permalink to &quot;全局生效中间件&quot;">​</a></h2><p>含义：客户端发起任何请求都会触发的中间件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app.use(mw)</span></span></code></pre></div><p>定义的写法也可以更简化一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义一个最简单的中间件函数</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(function (req, res, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;这是最简单的中间件函数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    next()</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="局部生效中间件" tabindex="-1">局部生效中间件 <a class="header-anchor" href="#局部生效中间件" aria-label="Permalink to &quot;局部生效中间件&quot;">​</a></h2><p>含义：不使用 app.use 定义的中间件。 在创建路由时，将定义好的中间件写入第二参数，表示该中间件仅在当前路由生效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app.get(&#39;/&#39;, mw1, (req, res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.send(&#39;Home page.&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>也可以同时使用多个这样的中间件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app.get(&#39;/&#39;, mw1, mw2, (req, res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.send(&#39;Home page.&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ul><li><p>注意事项</p><ul><li><ol><li>中间件要定义在路由之前。</li></ol></li><li><ol start="2"><li>不要忘记调用 next()，且要最后调用。</li></ol></li></ul></li></ul><h2 id="中间件分类" tabindex="-1">中间件分类 <a class="header-anchor" href="#中间件分类" aria-label="Permalink to &quot;中间件分类&quot;">​</a></h2><ol><li>应用级别：通过 <code>app.use()</code> 或 <code>app.get()</code> 或 <code>app.post()</code>，绑定到 app 实例上的中间件，叫做应用级别的中间件。</li><li>路由级别：绑定到 <code>express.Router()</code> 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。</li><li>错误级别：专门用来捕获项目异常错误，从而防止项目异常崩溃。要在所有路由之后注册。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app.use( function (err,req,res,next){      // 错误级别的中问件</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(发生了错误:&#39; + err.message) // 在服务器打印错误消息</span></span>
<span class="line"><span style="color:#A6ACCD;">    res.send(&#39;Error!&#39; + err.message)       // 向客户读应谱奖相关的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ol start="4"><li><p>Express 内置</p><p>a. <code>express.static</code> 托管静态资源 b. <code>express.json</code> 解析 JSON 格式的请求体数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app.use(express.json)</span></span></code></pre></div><p>c. <code>express.urlencoded</code> 解析 URL-encoded 格式的请求体数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app.use(express.urlencoded({ extended: false }))</span></span></code></pre></div></li><li><p>第三方 例如 <code>body-parser</code> 解析请求体数据</p><ul><li><p>Step 1: 运行 <code>npm i body-parser</code> 安装中间件</p></li><li><p>Step 2: 使用 <code>require</code> 导入中间件</p></li><li><p>Step 3: 调用 <code>app.use()</code> 注册并使用中间件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1.导入解析表单数据的中间件body-parser</span></span>
<span class="line"><span style="color:#A6ACCD;">const par sen = require(&#39;body-parser&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2.使用 app.use() 注册中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(parser.urlencoded({ extended: false }))</span></span></code></pre></div></li></ul></li></ol>`,23),t=[o];function c(i,r,d,C,u,h){return e(),a("div",null,t)}const y=s(p,[["render",c]]);export{g as __pageData,y as default};
