import{_ as e,c as o,o as a,a4 as s}from"./chunks/framework.C8gDNRqg.js";const _=JSON.parse('{"title":"模块化","description":"","frontmatter":{},"headers":[],"relativePath":"basic/服务端/Nodejs/01-模块化.md","filePath":"basic/服务端/Nodejs/01-模块化.md"}'),l={name:"basic/服务端/Nodejs/01-模块化.md"},i=s(`<h1 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h1><h2 id="含义" tabindex="-1">含义 <a class="header-anchor" href="#含义" aria-label="Permalink to &quot;含义&quot;">​</a></h2><p>把一个大文件拆分成独立又互相依赖的小模块。</p><h2 id="模块分类" tabindex="-1">模块分类 <a class="header-anchor" href="#模块分类" aria-label="Permalink to &quot;模块分类&quot;">​</a></h2><ul><li>ⅰ. 内置模块：如 <code>fs</code>、<code>path</code>、<code>http</code> 等。（详述于下一节笔记。）</li><li>ⅱ. 自定义模块：用户创建的每个 js 文件都算是。（加载模块的同时会执行）</li><li>ⅲ. 第三方模块：需要提前下载的。</li></ul><h2 id="加载模块" tabindex="-1">加载模块 <a class="header-anchor" href="#加载模块" aria-label="Permalink to &quot;加载模块&quot;">​</a></h2><p>使用 require()方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1．加载内置的fs模块</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span>// 2. 加载用户的自定义模块</span></span>
<span class="line"><span>const custom=require(&#39;./custom.js&#39;)</span></span>
<span class="line"><span>// 3. 加载第三方模块</span></span>
<span class="line"><span>const moment = require(&#39;moment&#39;)</span></span></code></pre></div><h2 id="模块作用域" tabindex="-1">模块作用域 <a class="header-anchor" href="#模块作用域" aria-label="Permalink to &quot;模块作用域&quot;">​</a></h2><ul><li>ⅰ. 含义：在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问。</li><li>ⅱ. <code>module</code> 对象：存储了和当前模块有关的信息。 *<code>module.exports</code> 对象：将模块内的成员共享出去。<code>require()</code> 导入自定义磨块时，得到的就是 <code>module.exports</code> 所指向 的对象。</li><li>ⅲ. <code>exports</code> 对象：默认情况下和 <code>module.exports</code> 指向同一个对象，最终共享的结果还是以 <code>module.export</code> 指向的对象为准。</li></ul><h2 id="模块化规范-commonjs" tabindex="-1">模块化规范 -- CommonJS <a class="header-anchor" href="#模块化规范-commonjs" aria-label="Permalink to &quot;模块化规范 -- CommonJS&quot;">​</a></h2><p>CommonJS 规定：</p><ul><li>每个模块内部，<code>module</code> 变量代表当前模块。</li><li>module 变量是一个对象，它的 <code>exports</code> 属性(即 <code>module.exports</code>)是对外的接口。</li><li>加载某个模块，其实是加载该模块的 <code>module.exports</code> 属性。<code>require()</code> 方法用于加载模块。</li></ul><h2 id="模块的加载机制" tabindex="-1">模块的加载机制 <a class="header-anchor" href="#模块的加载机制" aria-label="Permalink to &quot;模块的加载机制&quot;">​</a></h2><ul><li>优先从缓存中加载</li><li>内置模块的加载机制：若有第三方模块与内置模块同名，优先加载内置模块。</li><li>自定义模块的加载机制 <ul><li>ⅰ. 必须添加路径标识符，不然 node 会将它当作其他类型模块。</li><li>ⅱ. 若省略了文件扩展名，node 会自动分别尝试 <code>.js</code>、<code>.json</code>、<code>.node</code>。</li></ul></li><li>第三方模块的加载机制：如果不是内置模块或自定义模块，nodejs 会从当前模块的父目录开始（这一层的没找到就继续退一层目录继续找，直至退到磁盘根目录），尝试冲 node_modules 文件夹中加载第三方模块。</li><li>目录作为模块：当把目录作为模块标识符，传递给 <code>require()</code>进行加载的时候，有三种加载方式: <ul><li>在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 <code>require()</code> 加载的入口</li><li>如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Nodejs 将会试图加载目录下的 <code>index.js</code> 文件。</li><li>如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失: <code>Error: Cannot find module &#39;xxx&#39;</code></li></ul></li></ul>`,15),d=[i];function n(c,t,r,p,u,h){return a(),o("div",null,d)}const q=e(l,[["render",n]]);export{_ as __pageData,q as default};
