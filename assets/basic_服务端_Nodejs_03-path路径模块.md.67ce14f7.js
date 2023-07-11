import{_ as s,c as a,o as n,V as e}from"./chunks/framework.987d87f6.js";const m=JSON.parse('{"title":"path 路径模块","description":"","frontmatter":{},"headers":[],"relativePath":"basic/服务端/Nodejs/03-path路径模块.md","filePath":"basic/服务端/Nodejs/03-path路径模块.md"}'),l={name:"basic/服务端/Nodejs/03-path路径模块.md"},t=e(`<h1 id="path-路径模块" tabindex="-1">path 路径模块 <a class="header-anchor" href="#path-路径模块" aria-label="Permalink to &quot;path 路径模块&quot;">​</a></h1><ul><li><p>a. 导入：<code>const path = require(&#39;path&quot;)</code></p></li><li><p>b. 基本方法</p><ul><li><p>ⅰ. <code>path.join()</code> 路径拼接，(特殊用法： <code>../</code> 会抵消一层路径)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const pathStr = path.join(&#39;/a&#39;, &#39;/b/c&#39;, &#39;../&quot;, &#39;./d&#39;, &#39;e&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.1og(pathStr) // 输出\\a\\b\\d\\e</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const pathStr2 = path.join(_dirname, &#39;./files/1.txt&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(pathStr2) // 输出前文件所处目录\\files\\1.txt</span></span></code></pre></div></li><li><p>ⅱ. <code>path.basename()</code> 获取路径中的最后一部分，通常用来获取路径中的文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const fpath = &#39;/a/b/c/index.html&#39; // 文件的存放路径</span></span>
<span class="line"><span style="color:#A6ACCD;">var fullName = path.basename(fpath)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(fullName) //输出 index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">var namewithoutExt = path.basename(fpath,&#39;.html&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(namewithoutExt) // 输出 index</span></span></code></pre></div></li><li><p>ⅲ. <code>path.extname()</code> 获取路径中的扩展名部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const fpath = &#39;/a/b/cfindex.html&#39; // 路径字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">const fext = path.extname(fpath)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(fext) // 输出.html</span></span></code></pre></div></li></ul></li><li><p>c. 综合案例 -- 时钟案例</p><ul><li><p>ⅰ. 实现步骤</p><pre><code>① 创建两个正则表达式,分别用来匹配\`&lt;style&gt;\`和\`&lt;script&gt;\`标签
② 使用 fs 模块，读取需要被处理的 HTML 文件
③ 自定义 resolveCSS 方法,来写入 index.css 样式文件
④ 自定义 resolveJS 方法,来写入 index.js 脚本文件
⑤ 自定义 resolveHTML 方法,来写入 index.html 文件
</code></pre></li><li><p>ⅱ. 特殊知识点</p><ol><li><code>reg.exec()</code> 使用正则提取需要的内容（reg 是正则，参数为要从哪里提取）。例如：<code>const r1 = regStyle.exec(htm1str)</code></li><li>在提取 html 内容时，要将内联标签替换为外联标签。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1 定义处理 HIML 结构的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">function resolveHTML(htmlStr) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    const newHITML = htmlstr.replace(regstyle,&#39;&lt;link rel=&quot;stylesheet&quot; href=&quot;./index.ss&quot; /&gt;&#39;).replace(regScript, &#39;&lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 3 写入 index.html 这个文件</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.writeFile(path.join(__dirname, &#39;./clock/index.html&#39;), newHTML,function(err)(</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (err) return console.log(&#39;写入 HTML 文件失败!&#39; + err.message)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;写入 HTML 页面成功!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li></ul></li></ul>`,2),p=[t];function o(c,i,r,d,h,C){return n(),a("div",null,p)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
