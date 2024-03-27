import{_ as s,c as a,o as n,a4 as e,ah as p}from"./chunks/framework.C8gDNRqg.js";const v=JSON.parse('{"title":"认证机制","description":"","frontmatter":{},"headers":[],"relativePath":"basic/服务端/Nodejs/10-认证机制.md","filePath":"basic/服务端/Nodejs/10-认证机制.md"}'),l={name:"basic/服务端/Nodejs/10-认证机制.md"},i=e(`<h1 id="认证机制" tabindex="-1">认证机制 <a class="header-anchor" href="#认证机制" aria-label="Permalink to &quot;认证机制&quot;">​</a></h1><h2 id="web-开发模式" tabindex="-1">Web 开发模式 <a class="header-anchor" href="#web-开发模式" aria-label="Permalink to &quot;Web 开发模式&quot;">​</a></h2><ul><li>传统 -- 服务端渲染</li><li>新型 -- 前后端分离：后端只提供 API 接口，前端使用 Ajax 调用接口。</li></ul><h2 id="身份认证-身份验证-鉴权" tabindex="-1">身份认证 / 身份验证 / 鉴权 <a class="header-anchor" href="#身份认证-身份验证-鉴权" aria-label="Permalink to &quot;身份认证 / 身份验证 / 鉴权&quot;">​</a></h2><ul><li><p>a. 服务端渲染：采用 <code>Session</code> 认证机制</p></li><li><p>b. 前后端分离：采用 <code>JWT</code> 认证机制</p></li><li><p>c. Session 认证在 Express 中使用</p><ul><li>ⅰ. 安装</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i express-session</span></span></code></pre></div><ul><li>ⅱ. 配置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1．导入 session 中间件</span></span>
<span class="line"><span>var session = require(&#39;express-session&#39;)</span></span>
<span class="line"><span>// 2．配置 Session 中间件</span></span>
<span class="line"><span>app.use(session({</span></span>
<span class="line"><span>  secret: &#39;keyboard cat&#39;,  // secret属性的值可以为任意字符串</span></span>
<span class="line"><span>  resave: false,           // 固定写法</span></span>
<span class="line"><span>  saveUninitialized: true  // 固定写法</span></span>
<span class="line"><span>}))</span></span></code></pre></div><ul><li>ⅲ. 向 Session 存数据：Session 中间件配置成功后，<code>req.session</code> 可供存储，直接赋值即可。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>app.post(&#39;/api/login&#39; ,(reg, res) =&gt;{</span></span>
<span class="line"><span>  // 判斯用户提交的登录信息是否正确</span></span>
<span class="line"><span>  if (req.body.username !== &#39;admin&#39; || req.body.password !== &#39;000000&#39;) {</span></span>
<span class="line"><span>    return res.send({ status: 1，msg:“登录失败” })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  req.session.user = req.body // 将用户的信息,存储到Session中</span></span>
<span class="line"><span>  req.session.islogin = true  // 将用户的登录状态,存储到 Session 中</span></span>
<span class="line"><span>  res.send({ status: 0, msg:&#39;登录成功&#39;})</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li>ⅳ. 从 Session 取数据：直接从 <code>req.session</code> 获取</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 获取用户姓名的接口</span></span>
<span class="line"><span>app.get(&#39;/api/username &#39;, (req, res)=&gt;{</span></span>
<span class="line"><span>  // 判断用户是否登录</span></span>
<span class="line"><span>  if(!req.session.islogin) {</span></span>
<span class="line"><span>    return res.send({ status: 1, msg: &#39;fail })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  res.send({ status: 0，msg: &#39;success&#39;, username: req.session.user.username })</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li>ⅴ. 清空 Session：<code>req.session.destroy()</code> 清空当前用户的 session。</li></ul></li><li><p>d. JWT 认证机制</p><ul><li>ⅰ. 工作原理 <img src="`+p+`" alt="avatar"></li><li>ⅱ. 组成部分 <ul><li><ol><li><code>Header</code>：安全性部分</li></ol></li><li><ol start="2"><li><code>Payload</code>：真正的用户信息（加密后）</li></ol></li><li><ol start="3"><li><code>Signature</code>：安全性部分</li></ol></li></ul></li><li>ⅲ. JWT 在 Express 中使用 <ul><li><ol><li>安装</li></ol></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i jsonwebtoken express-jwt</span></span></code></pre></div><ul><li>a. 导入</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1．导入用于生成JwT字符串的包</span></span>
<span class="line"><span>const jwt = require(&#39;jsonwebtoken &#39;)</span></span>
<span class="line"><span>// 2．导入用于将客户端发送过来的JwT字符串，解析还原成JSON对象的包4</span></span>
<span class="line"><span>const expressJWT = require( &#39;express-jwt&#39;)</span></span></code></pre></div><ul><li>b. 定义 <code>secret</code> 密钥，密钥的本质是一个字符串</li><li>c. 生成 <code>JWT</code> 字符串，使用 <code>jwt.sign()</code> 方法，三个参数分别表示信息、密钥和有效期</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: &#39;30s&#39; })</span></span>
<span class="line"><span>res.send({</span></span>
<span class="line"><span>  status: 200,</span></span>
<span class="line"><span>  message:&#39;登录成功!&#39;，</span></span>
<span class="line"><span>  token: tokenStr,  // 要发送给客户端的token字符串</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li>d. 将 <code>JWT</code> 字符串还原为 <code>JSON</code> 对象其中绿色代码为正则。解析出来的用户信息挂载到 <code>req.user</code> 对象中。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 使用app.use()来注册中间件</span></span>
<span class="line"><span>// expressJwT({ secret: secretKey })就是用来解析 Token 的中间件3</span></span>
<span class="line"><span>// .unless({ path:[ /^\\/api\\//] })用来指定哪些接口不需要访问权限</span></span>
<span class="line"><span>app.use(expressJMT({ secret: secretKey }).unless({ path: [ /^/api\\//] }))</span></span>
<span class="line"><span>// 解析出来的用户信息挂载到req.user对象中。</span></span></code></pre></div><ul><li>e. <code>req.user</code> 对象：存放从 <code>JWT</code> 字符串解析出来的用户信息。</li><li>f. 捕获解析错误</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>app.use((err, req, res, next) =&gt; {</span></span>
<span class="line"><span>  // token解析失败导致的错误</span></span>
<span class="line"><span>  if(err.name === &#39;UnauthorizedError &#39;) {</span></span>
<span class="line"><span>    return res.send({ status:401，message:&#39;无效的token&#39; })</span></span>
<span class="line"><span>  // 其它原因导致的错误</span></span>
<span class="line"><span>res.send({ status: 500, message:&#39;未知错误&#39; })</span></span></code></pre></div></li></ul></li></ul>`,5),t=[i];function o(c,r,d,u,h,g){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{v as __pageData,m as default};
