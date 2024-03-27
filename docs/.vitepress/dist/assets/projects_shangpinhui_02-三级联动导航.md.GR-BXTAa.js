import{_ as a,c as i,o as l,a4 as e,bh as s,bi as t,bj as r,bk as o,bl as p,bm as h,bn as n,bo as c,bp as d,bq as u,br as m,bs as g,bt as _,bu as k,bv as b,bw as q,bx as y,by as f,bz as x,bA as v,bB as E,bC as P}from"./chunks/framework.C8gDNRqg.js";const I=JSON.parse('{"title":"三级联动导航","description":"","frontmatter":{},"headers":[],"relativePath":"projects/shangpinhui/02-三级联动导航.md","filePath":"projects/shangpinhui/02-三级联动导航.md"}'),F={name:"projects/shangpinhui/02-三级联动导航.md"},C=e('<h1 id="三级联动导航" tabindex="-1">三级联动导航 <a class="header-anchor" href="#三级联动导航" aria-label="Permalink to &quot;三级联动导航&quot;">​</a></h1><h2 id="_1-三级联动导航" tabindex="-1">1. 三级联动导航 <a class="header-anchor" href="#_1-三级联动导航" aria-label="Permalink to &quot;1. 三级联动导航&quot;">​</a></h2><blockquote><p>页面效果（一级红色，二级蓝色，三级紫色）<img src="'+s+'" alt="image.png"></p></blockquote><h3 id="_1-1-数据渲染-vuex" tabindex="-1">1.1 数据渲染(vuex) <a class="header-anchor" href="#_1-1-数据渲染-vuex" aria-label="Permalink to &quot;1.1 数据渲染(vuex)&quot;">​</a></h3><p><code>&lt;template&gt;</code>（一级红色，二级蓝色，三级紫色）</p><p><img src="'+t+'" alt="image.png"></p><p><code>&lt;script&gt;</code></p><p><img src="'+r+'" alt="image.png"></p><h3 id="_1-2-一级分类动态添加背景颜色-skyblue" tabindex="-1">1.2 一级分类动态添加背景颜色 (skyblue) <a class="header-anchor" href="#_1-2-一级分类动态添加背景颜色-skyblue" aria-label="Permalink to &quot;1.2 一级分类动态添加背景颜色 (skyblue)&quot;">​</a></h3><h4 id="_1-2-1-效果" tabindex="-1">1.2.1 效果 <a class="header-anchor" href="#_1-2-1-效果" aria-label="Permalink to &quot;1.2.1 效果&quot;">​</a></h4><p><img src="'+o+'" alt="image.png"></p><h4 id="_1-2-2-解决方案" tabindex="-1">1.2.2 解决方案 <a class="header-anchor" href="#_1-2-2-解决方案" aria-label="Permalink to &quot;1.2.2 解决方案&quot;">​</a></h4><ol><li>方案一：用 css 的:hover 样式 （一级分类的 class 为 item）</li></ol><p><img src="'+p+'" alt="image.png"></p><ol start="2"><li>方案二：用 js</li></ol><ul><li><code>&lt;template&gt;</code> 红色框线为一级分类的结构，绿色代码为解决方案。<img src="'+h+'" alt="image.png"></li><li><code>&lt;script&gt;</code> <img src="'+n+'" alt="image.png"></li><li><code>&lt;style&gt;</code> <img src="'+c+'" alt="image.png"></li></ul><h4 id="_1-2-3-二三级分类显示与隐藏" tabindex="-1">1.2.3 二三级分类显示与隐藏 <a class="header-anchor" href="#_1-2-3-二三级分类显示与隐藏" aria-label="Permalink to &quot;1.2.3 二三级分类显示与隐藏&quot;">​</a></h4><ul><li>效果：当鼠标移动到一级分类标题时，显示扩展页</li></ul><p><img src="'+d+'" alt="image.png"></p><ul><li>实现方案 <ul><li>用 css 的 display=none/block 样式。</li><li>用 js：<img src="'+u+'" alt="image.png"></li></ul></li></ul><h2 id="_2-节流与防抖-lodash-插件" tabindex="-1">2. 节流与防抖 （** lodash 插件） <a class="header-anchor" href="#_2-节流与防抖-lodash-插件" aria-label="Permalink to &quot;2. 节流与防抖 （\\*\\* lodash 插件）&quot;">​</a></h2><h3 id="_2-1-节流" tabindex="-1">2.1 节流 <a class="header-anchor" href="#_2-1-节流" aria-label="Permalink to &quot;2.1 节流&quot;">​</a></h3><blockquote><p>在规定的间隔时间范围内不重复触发回调，只有大于这个时间间隔才会再次触发回调，把频繁触发变为少量触发。</p></blockquote><h3 id="_2-2-防抖" tabindex="-1">2.2 防抖 <a class="header-anchor" href="#_2-2-防抖" aria-label="Permalink to &quot;2.2 防抖&quot;">​</a></h3><blockquote><p>前面的所有触发记录都被取消，最后一次执行在规定的事件之后才会触发，也就是说如果连续快速的触发，只会执行最后一次。</p></blockquote><h3 id="_2-3-三级联动节流" tabindex="-1">2.3 三级联动节流 <a class="header-anchor" href="#_2-3-三级联动节流" aria-label="Permalink to &quot;2.3 三级联动节流&quot;">​</a></h3><ul><li><p>引入 lodash（正常项目中支持按需引入）</p><ul><li>全部引入：</li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lodash&#39;</span></span></code></pre></div><ul><li>按需引入：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> throttle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lodash/throttle&#39;</span></span></code></pre></div><ul><li>在方法中应用</li></ul><p><img src="'+m+'" alt="image.png"></p><h2 id="_3-三级联动路由跳转" tabindex="-1">3. 三级联动路由跳转 <a class="header-anchor" href="#_3-三级联动路由跳转" aria-label="Permalink to &quot;3. 三级联动路由跳转&quot;">​</a></h2><h3 id="_3-1-声明式导航-router-link-跳转-会卡顿-不建议" tabindex="-1">3.1 声明式导航（router-link）跳转：会卡顿，不建议 <a class="header-anchor" href="#_3-1-声明式导航-router-link-跳转-会卡顿-不建议" aria-label="Permalink to &quot;3.1 声明式导航（router-link）跳转：会卡顿，不建议&quot;">​</a></h3><h3 id="_3-2-编程式导航-push-或-replace-跳转" tabindex="-1">3.2 编程式导航（push 或 replace）跳转 <a class="header-anchor" href="#_3-2-编程式导航-push-或-replace-跳转" aria-label="Permalink to &quot;3.2 编程式导航（push 或 replace）跳转&quot;">​</a></h3><ol><li><p>方法一：给三级分类的每个标签添加点击事件（不建议）</p></li><li><p>方法二：结合事件委派：给三级分类最近的父标签添加点击事件。</p><ol><li><p>要解决的问题：</p><ul><li>如何确定只有点击每级分类的<code>&lt;a&gt;</code>标签才触发事件。</li><li>如何确定点击的是几级分类。</li></ul></li><li><p>实现步骤</p><ul><li><p>页面结构如图。红色线表示为最近的父标签绑定事件，绿色线表示给特定要识别的标签添加“自定义属性”（注意自定义属性必须由:data-开头），其中 categoryName 解决问题 a，categoryID 解决问题 b。<img src="'+g+'" alt="image.png"></p></li><li><p><code>&lt;script&gt;</code>逻辑：</p></li></ul><p><img src="'+_+'" alt="image.png"></p></li></ol></li></ol><h2 id="_4-三级联动跳转到-search-页面后的样式" tabindex="-1">4. 三级联动跳转到 Search 页面后的样式 <a class="header-anchor" href="#_4-三级联动跳转到-search-页面后的样式" aria-label="Permalink to &quot;4. 三级联动跳转到 Search 页面后的样式&quot;">​</a></h2><h3 id="需求-1-默认三级联动是隐藏的-当鼠标移动到-全部商品分类-上时才显示-鼠标离开后再隐藏。" tabindex="-1">需求 1：默认三级联动是隐藏的，当鼠标移动到“全部商品分类”上时才显示，鼠标离开后再隐藏。 <a class="header-anchor" href="#需求-1-默认三级联动是隐藏的-当鼠标移动到-全部商品分类-上时才显示-鼠标离开后再隐藏。" aria-label="Permalink to &quot;需求 1：默认三级联动是隐藏的，当鼠标移动到“全部商品分类”上时才显示，鼠标离开后再隐藏。&quot;">​</a></h3><ol><li><p>在三级联动组件的<code>&lt;template&gt;</code>中，为“全部商品分类”与三级联动的父标签添加鼠标进入和离开事件。<img src="'+k+'" alt="image.png"></p></li><li><p>在<code>&lt;script&gt;</code>中</p><ul><li>首先在 data 中添加一个变量 show。</li></ul><p><img src="'+b+'" alt="image.png"></p><ul><li>为鼠标进入和离开书写逻辑。鼠标离开时，show 为 false，鼠标进入时为 true。</li></ul><p><img src="'+q+`" alt="image.png"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enterShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.show </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>上一步只解决了用鼠标控制三级联动是否显示，我们还需要在一进入 Search 页面时自动隐藏三级联动，所以要在 mounted 时再设置一下。</li></ul><p><img src="`+y+'" alt="image.png"></p></li></ol><h3 id="需求-2-需求-1-过程中的隐藏与显示三级联动-需要加一个过渡动画" tabindex="-1">需求 2：需求 1 过程中的隐藏与显示三级联动，需要加一个过渡动画 <a class="header-anchor" href="#需求-2-需求-1-过程中的隐藏与显示三级联动-需要加一个过渡动画" aria-label="Permalink to &quot;需求 2：需求 1 过程中的隐藏与显示三级联动，需要加一个过渡动画&quot;">​</a></h3><ol><li>在<code>&lt;template&gt;</code>中：</li></ol><p><img src="'+f+'" alt="image.png"></p><ol start="2"><li>在<code>&lt;style&gt;</code>中：</li></ol><p><img src="'+x+'" alt="image.png"></p><h2 id="_5-其他问题" tabindex="-1">5. 其他问题 <a class="header-anchor" href="#_5-其他问题" aria-label="Permalink to &quot;5. 其他问题&quot;">​</a></h2><h3 id="_5-1-性能优化" tabindex="-1">5.1 性能优化 <a class="header-anchor" href="#_5-1-性能优化" aria-label="Permalink to &quot;5.1 性能优化&quot;">​</a></h3><ol><li><p>存在问题：三级联动导航在其组件 TypeNav 中用 Axios 请求了组件中所有分类标题的数据。然而，这个组件在 Home 和 Search 组件中都引用了，这样导致每次跳转到这两个页面，数据就会重新请求。我们希望数据是能够缓存的，也就是只请求一次。</p></li><li><p>解决方案：在整个项目文件中，只执行一次的组件就是跟组件 App.vue，在其中调用 mounted 函数，就可以实现从一开始请求数据，然后全程使用。将原来 TypeNav 组件中 mounted 函数中请求数据派发的代码剪切到 App.vue 的 mounted 函数中。</p></li></ol><p><img src="'+v+'" alt="image.png"></p><h3 id="_5-2-合并参数" tabindex="-1">5.2. 合并参数 <a class="header-anchor" href="#_5-2-合并参数" aria-label="Permalink to &quot;5.2. 合并参数&quot;">​</a></h3><ol><li><p>存在问题：由 Home 跳转到 Search 页面时，能够传两种参数，一种是点击三级联动列表的参数（query 参数），一种是通过搜索框的参数（param 参数）。这两种参数会分别跳转到 Search，所以每次跳转的参数会刷新，我们希望用户在使用时可以累积自己选中或搜索的商品类别，所以需要合并参数。</p></li><li><p>解决方案：要分两个方面来实现，第一方面：先传 query 参数后，再传 params 参数时，要判断是否已有 query 参数，是的话就保留 query 参数；反之第二方面：先传 params 参数，后传 query 参数时，要判断是否已有 params 参数，是的话保留。</p><ul><li>搜索框组件中：</li></ul><p><img src="'+E+'" alt="image.png"></p><ul><li>三级联动组件中：</li></ul><p><img src="'+P+'" alt="image.png"></p></li></ol>',50),j=[C];function A(S,B,D,T,N,w){return l(),i("div",null,j)}const V=a(F,[["render",A]]);export{I as __pageData,V as default};
