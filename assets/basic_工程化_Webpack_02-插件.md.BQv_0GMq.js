import{_ as a,c as s,o as i,a4 as e,a7 as t}from"./chunks/framework.C8gDNRqg.js";const E=JSON.parse('{"title":"插件","description":"","frontmatter":{},"headers":[],"relativePath":"basic/工程化/Webpack/02-插件.md","filePath":"basic/工程化/Webpack/02-插件.md"}'),l={name:"basic/工程化/Webpack/02-插件.md"},n=e('<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h1><h2 id="_1-webpack-dev-server-监听项目源代码变化-自动打包。" tabindex="-1">1. <code>webpack-dev-server</code>：监听项目源代码变化，自动打包。 <a class="header-anchor" href="#_1-webpack-dev-server-监听项目源代码变化-自动打包。" aria-label="Permalink to &quot;1. `webpack-dev-server`：监听项目源代码变化，自动打包。&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>以npm的安装方法为例：<code>npm i webpack-dev-server -D</code></p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>步骤1： 修改package.json的scirpts节点中的dev如下</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>步骤2： 为实现自动跟踪源代码变化，要修改两个地方</p><ul><li>修改index.html：</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>修改webpack.config.js：</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>\n<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h2 id="_2-html-webpack-plugin" tabindex="-1">2. <code>html-webpack-plugin</code> <a class="header-anchor" href="#_2-html-webpack-plugin" aria-label="Permalink to &quot;2. `html-webpack-plugin`&quot;">​</a></h2><h3 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>以npm的安装方法为例：<code>npm i html-webpack-plugin -D</code></p><h3 id="导入-在webpack-config-js中" tabindex="-1">导入（在webpack.config.js中） <a class="header-anchor" href="#导入-在webpack-config-js中" aria-label="Permalink to &quot;导入（在webpack.config.js中）&quot;">​</a></h3><p><img src="'+t+'" alt=""></p><p><strong>意义</strong>：不安装此插件时，通过 http 打开 index.html 时是先打开项目目录，需要手动点击 src 才能跳转到 index 页面。而此插件提供了将指定页面复制到另一路径（根目录）的功能。并且，在复制到的页面中自动补充<code>&lt;script&gt;</code>脚本。</p><h2 id="需要注意" tabindex="-1">！！需要注意！！ <a class="header-anchor" href="#需要注意" aria-label="Permalink to &quot;！！需要注意！！&quot;">​</a></h2><ul><li><code>open</code>: true 表示打包后自动开浏览器</li><li><code>port</code>: 8222 表示自定义端口号</li></ul>',20),p=[n];function h(c,o,r,d,k,u){return i(),s("div",null,p)}const b=a(l,[["render",h]]);export{E as __pageData,b as default};
