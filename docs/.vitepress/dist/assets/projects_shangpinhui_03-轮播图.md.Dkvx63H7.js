import{_ as a,c as i,o as e,a4 as s,bD as t,bE as l,bF as o,bG as r,bH as n,bI as p,bJ as c,bK as h,bL as m,bM as d,bN as _,bO as u,bP as g,bQ as b,bR as k,bS as q}from"./chunks/framework.C8gDNRqg.js";const L=JSON.parse('{"title":"首页轮播图","description":"","frontmatter":{},"headers":[],"relativePath":"projects/shangpinhui/03-轮播图.md","filePath":"projects/shangpinhui/03-轮播图.md"}'),f={name:"projects/shangpinhui/03-轮播图.md"},j=s('<h1 id="首页轮播图" tabindex="-1">首页轮播图 <a class="header-anchor" href="#首页轮播图" aria-label="Permalink to &quot;首页轮播图&quot;">​</a></h1><h2 id="_1-mockjs" tabindex="-1">1. Mockjs <a class="header-anchor" href="#_1-mockjs" aria-label="Permalink to &quot;1. Mockjs&quot;">​</a></h2><blockquote><p>随机生成数据，拦截 Ajax。</p></blockquote><p>如何在我们的项目中使用 Mockjs 呢？</p><h3 id="_1-1-创建-mock-文件夹" tabindex="-1">1.1 创建 mock 文件夹 <a class="header-anchor" href="#_1-1-创建-mock-文件夹" aria-label="Permalink to &quot;1.1 创建 mock 文件夹&quot;">​</a></h3><p>在文件夹里新建 json 文件存放假数据，新建 mockServe.js 书写 mock 逻辑</p><p><img src="'+t+'" alt="image.png"></p><p>下面以轮播图组件请求 mock 数据为例（对应的假数据存放在 banner.json 中）。</p><ul><li><ol><li>banner.json <img src="'+l+'" alt="image.png"></li></ol></li><li><ol start="2"><li>mockServe.js。1 导入，2 请求，3 暴露。 <img src="'+o+'" alt="image.png"></li></ol></li><li><ol start="3"><li>main.js 入口文件中去执行它</li></ol></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/mock/mockServer.js&#39;</span></span></code></pre></div><h3 id="_1-2-请求派发数据-在请求数据的组件中-如轮播图-listcontainer-vue" tabindex="-1">1.2. 请求派发数据（在请求数据的组件中，如轮播图 ListContainer.vue） <a class="header-anchor" href="#_1-2-请求派发数据-在请求数据的组件中-如轮播图-listcontainer-vue" aria-label="Permalink to &quot;1.2. 请求派发数据（在请求数据的组件中，如轮播图 ListContainer.vue）&quot;">​</a></h3><p><img src="'+r+'" alt="image.png"></p><h3 id="_1-3-派发数据-在对应的小仓库-index-js-中" tabindex="-1">1.3. 派发数据（在对应的小仓库 index.js 中） <a class="header-anchor" href="#_1-3-派发数据-在对应的小仓库-index-js-中" aria-label="Permalink to &quot;1.3. 派发数据（在对应的小仓库 index.js 中）&quot;">​</a></h3><p><img src="'+n+'" alt="image.png"></p><h3 id="_1-4-请求成功的打印结果" tabindex="-1">1.4. 请求成功的打印结果 <a class="header-anchor" href="#_1-4-请求成功的打印结果" aria-label="Permalink to &quot;1.4. 请求成功的打印结果&quot;">​</a></h3><p><img src="'+p+'" alt="image.png"></p><p><img src="'+c+'" alt="image.png"></p><h3 id="_1-5-使用数据-在轮播图组件的-script-中" tabindex="-1">1.5. 使用数据（在轮播图组件的<code>&lt;script&gt;</code>中） <a class="header-anchor" href="#_1-5-使用数据-在轮播图组件的-script-中" aria-label="Permalink to &quot;1.5. 使用数据（在轮播图组件的`&lt;script&gt;`中）&quot;">​</a></h3><p><img src="'+h+'" alt="image.png"></p><h3 id="_1-6-渲染到页面结构-在轮播图组件的-template-中" tabindex="-1">1.6. 渲染到页面结构（在轮播图组件的<code>&lt;template&gt;</code>中） <a class="header-anchor" href="#_1-6-渲染到页面结构-在轮播图组件的-template-中" aria-label="Permalink to &quot;1.6. 渲染到页面结构（在轮播图组件的`&lt;template&gt;`中）&quot;">​</a></h3><p><img src="'+m+'" alt="image.png"></p><h1 id="_2-轮播图实现滑动特效" tabindex="-1">2. 轮播图实现滑动特效 <a class="header-anchor" href="#_2-轮播图实现滑动特效" aria-label="Permalink to &quot;2. 轮播图实现滑动特效&quot;">​</a></h1><h2 id="_2-1-swiper-插件的应用" tabindex="-1">2.1 swiper 插件的应用 <a class="header-anchor" href="#_2-1-swiper-插件的应用" aria-label="Permalink to &quot;2.1 swiper 插件的应用&quot;">​</a></h2><h3 id="_2-1-1-安装" tabindex="-1">2.1.1 安装 <a class="header-anchor" href="#_2-1-1-安装" aria-label="Permalink to &quot;2.1.1 安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i swiper@5</span></span></code></pre></div><h3 id="_2-1-2-导入-可全局导入-在-main-js-执行" tabindex="-1">2.1.2 导入（可全局导入），在 main.js 执行 <a class="header-anchor" href="#_2-1-2-导入-可全局导入-在-main-js-执行" aria-label="Permalink to &quot;2.1.2 导入（可全局导入），在 main.js 执行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;swiper/css/swiper.min.css&#39;</span></span></code></pre></div><h3 id="_2-1-3-实例化-然后自定义滑动效果。这是最优的解决方案-退求其次可以用定时器实现。" tabindex="-1">2.1.3 实例化，然后自定义滑动效果。这是最优的解决方案，退求其次可以用定时器实现。 <a class="header-anchor" href="#_2-1-3-实例化-然后自定义滑动效果。这是最优的解决方案-退求其次可以用定时器实现。" aria-label="Permalink to &quot;2.1.3 实例化，然后自定义滑动效果。这是最优的解决方案，退求其次可以用定时器实现。&quot;">​</a></h3><p><img src="'+d+'" alt="image.png"></p><h3 id="_2-1-4-在页面结构中-将轮播图标签的-id-改为-ref-关键词。" tabindex="-1">2.1.4 在页面结构中，将轮播图标签的 id 改为 ref 关键词。 <a class="header-anchor" href="#_2-1-4-在页面结构中-将轮播图标签的-id-改为-ref-关键词。" aria-label="Permalink to &quot;2.1.4 在页面结构中，将轮播图标签的 id 改为 ref 关键词。&quot;">​</a></h3><p><img src="'+_+'" alt="image.png"></p><h2 id="_2-2-封装-swiper-函数" tabindex="-1">2.2 封装 swiper 函数 <a class="header-anchor" href="#_2-2-封装-swiper-函数" aria-label="Permalink to &quot;2.2 封装 swiper 函数&quot;">​</a></h2><h3 id="_2-2-1-需求" tabindex="-1">2.2.1 需求 <a class="header-anchor" href="#_2-2-1-需求" aria-label="Permalink to &quot;2.2.1 需求&quot;">​</a></h3><p>因为轮播图不仅应用在导航部分，还出现在下面的 Floor 组件中，最优的方法就是封装成函数，然后在使用到的组件中调用它。</p><h3 id="_2-2-2-步骤" tabindex="-1">2.2.2 步骤 <a class="header-anchor" href="#_2-2-2-步骤" aria-label="Permalink to &quot;2.2.2 步骤&quot;">​</a></h3><ul><li><ol><li>在 component 目录下新建 Carousel/index.vue，将已写好的轮播图页面结构（template）、参数（props）和逻辑（script）复制过来。 <img src="'+u+'" alt="image.png"></li></ol></li><li><ol start="2"><li>全局注册 Carousel 组件（main.js 中）。</li></ol></li></ul><p><img src="'+g+'" alt="image.png"></p><ul><li><ol start="3"><li><p>在轮播图组件中，删除步骤 1 中已经被封装好的代码，应用如下设置。将轮播图组件内请求的 Ajax 数据通过 props 参数传递给 Carousel 组件（属于父传子）。注意：多个组件共享 swiper 函数时，要保证 json 假数据的格式一致。</p><ul><li><ol><li>bannerList</li></ol></li></ul><p><img src="'+b+'" alt="image.png"></p><ul><li><ol start="2"><li><p>floorList（这里因为请求 Ajax 的组件是 Home，再由 Home 传给 Floor 组件，所以跟 bannerList 稍有不同）</p><ul><li><ol><li>home 组件中</li></ol></li></ul><p><img src="'+k+'" alt="image.png"></p><ul><li><ol start="2"><li>Floor 组件中，注意：因为 floor 和 banner 的 json 数据格式不完全相同，所以传到 Carousel 内的 list 也不同。</li></ol></li></ul><p><img src="'+q+'" alt="image.png"></p></li></ol></li></ul></li></ol></li></ul>',38),x=[j];function v(P,C,w,S,y,F){return e(),i("div",null,x)}const T=a(f,[["render",v]]);export{L as __pageData,T as default};
