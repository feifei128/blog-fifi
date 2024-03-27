import{_ as a,c as e,o as i,a4 as t,co as l,cp as o,cq as s,cr as r,cs as p,ct as h,cu as n,cv as c,cw as _,cx as m,cy as d,cz as g,cA as u,cB as b}from"./chunks/framework.C8gDNRqg.js";const S=JSON.parse('{"title":"商品详情页","description":"","frontmatter":{},"headers":[],"relativePath":"projects/shangpinhui/06-商品详情页.md","filePath":"projects/shangpinhui/06-商品详情页.md"}'),q={name:"projects/shangpinhui/06-商品详情页.md"},k=t('<h1 id="商品详情页" tabindex="-1">商品详情页 <a class="header-anchor" href="#商品详情页" aria-label="Permalink to &quot;商品详情页&quot;">​</a></h1><h2 id="_1-滚动行为-vue-进阶知识-当进行路由跳转时-可以设置默认距离页面顶部多少位置。" tabindex="-1">1. 滚动行为：vue 进阶知识，当进行路由跳转时，可以设置默认距离页面顶部多少位置。 <a class="header-anchor" href="#_1-滚动行为-vue-进阶知识-当进行路由跳转时-可以设置默认距离页面顶部多少位置。" aria-label="Permalink to &quot;1. 滚动行为：vue 进阶知识，当进行路由跳转时，可以设置默认距离页面顶部多少位置。&quot;">​</a></h2><ol><li>代码：在路由 js 中</li></ol><p><img src="'+l+'" alt="image.png"></p><h2 id="_2-打造商品详情页-detali-组件" tabindex="-1">2. 打造商品详情页 （Detali 组件） <a class="header-anchor" href="#_2-打造商品详情页-detali-组件" aria-label="Permalink to &quot;2. 打造商品详情页 （Detali 组件）&quot;">​</a></h2><ol><li>步骤：静态页面-&gt;发请求拿数据-&gt;用 vuex 渲染-&gt;写逻辑。前三步已经反复写过很多次，直接复制粘贴即可，下面重点记录动态。</li></ol><p><img src="'+o+'" alt="image.png"></p><p>绿色和黑色框是两个子组件，分别为放大镜组件（Zoom）和轮播图组件（ImageList）；蓝色是选择区域，要利用排他思想；紫色是购物车区域。 2. 实现：分模块实现：放大镜、轮播图、商品信息、购物车</p><h2 id="_3-放大镜-zoom-组件-detail-的子组件" tabindex="-1">3. 放大镜（Zoom 组件-&gt;Detail 的子组件） <a class="header-anchor" href="#_3-放大镜-zoom-组件-detail-的子组件" aria-label="Permalink to &quot;3. 放大镜（Zoom 组件-&gt;Detail 的子组件）&quot;">​</a></h2><h3 id="_3-1-在-detail-组件中引入" tabindex="-1">3.1 在 Detail 组件中引入： <a class="header-anchor" href="#_3-1-在-detail-组件中引入" aria-label="Permalink to &quot;3.1 在 Detail 组件中引入：&quot;">​</a></h3><p><img src="'+s+'" alt="image.png"></p><h3 id="_3-2-zoom-组件" tabindex="-1">3.2. Zoom 组件 <a class="header-anchor" href="#_3-2-zoom-组件" aria-label="Permalink to &quot;3.2. Zoom 组件&quot;">​</a></h3><ol><li>效果</li><li>页面结构：下图中，红色实线的两张图片分别表示商品主图和放大后的图；黄色事件用来处理鼠标在商品主图内移动；紫色框表示蒙版盒子。</li></ol><p><img src="'+r+'" alt="image.png"></p><h3 id="_3-3-逻辑" tabindex="-1">3.3. 逻辑 <a class="header-anchor" href="#_3-3-逻辑" aria-label="Permalink to &quot;3.3. 逻辑&quot;">​</a></h3><ol><li>获取主图 url，并渲染到页面中。skuImageList 为轮播图列表（在其他组件中实现），主图默认为索引第 0 个图，故 index 初始为 0，当用户点击轮播图内的某个图，将点击的索引 index 更新，即可实现将点击的轮播图放映到主图上。</li></ol><p><img src="'+p+'" alt="image.png"></p><ol start="2"><li>蒙版随鼠标移动，同时放大图也要动起来。</li></ol><p><img src="'+h+'" alt="image.png"></p><h2 id="_4-轮播图-imagelist-组件-detail-的子组件" tabindex="-1">4. 轮播图（ImageList 组件-&gt;Detail 的子组件） <a class="header-anchor" href="#_4-轮播图-imagelist-组件-detail-的子组件" aria-label="Permalink to &quot;4. 轮播图（ImageList 组件-&gt;Detail 的子组件）&quot;">​</a></h2><h3 id="_4-1-detail-组件中引入" tabindex="-1">4.1 Detail 组件中引入 <a class="header-anchor" href="#_4-1-detail-组件中引入" aria-label="Permalink to &quot;4.1 Detail 组件中引入&quot;">​</a></h3><p>这里是将 Detail 请求到的图片列表传入子组件了，其实不传也行，ImageList 组件自己可以 getter 到数据，Zomm 组件中就是这样操作的。</p><p><img src="'+n+'" alt="image.png"></p><h3 id="_4-2-页面结构" tabindex="-1">4.2 页面结构 <a class="header-anchor" href="#_4-2-页面结构" aria-label="Permalink to &quot;4.2 页面结构&quot;">​</a></h3><p>红线表示将接收到的轮播图列表数据渲染到页面上；黄色线用于处理用户点击哪个图，哪个图就具有高亮样式，要配合后面的事件一起使用；紫色线是用户点击图片触发的事件。</p><p><img src="'+c+'" alt="image.png"></p><h3 id="_4-3-逻辑" tabindex="-1">4.3 逻辑 <a class="header-anchor" href="#_4-3-逻辑" aria-label="Permalink to &quot;4.3 逻辑&quot;">​</a></h3><ol><li>接收父组件传来的轮播图列表：</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props: [&#39;skuImageList&#39;],</span></span></code></pre></div><ol start="2"><li>点击事件：要完成两个功能：1）动态高亮，要随着用户点击哪个图片而更新 index；2）将用户点击图片的 index 传给兄弟组件 Zoom，放映为主图。</li></ol><p><img src="'+_+'" alt="image.png"></p><ol start="3"><li>轮播图动画-&gt;Swiper 实例。这里与之前轮播图不同的地方在于，之前的轮播图只显示一张主图，然后轮播切换，但这个轮播图要一次显示 5 张，形成一个滑动窗口，所以要对 slidesPerView 属性进行设置。</li></ol><p><img src="'+m+'" alt="image.png"></p><h2 id="_5-商品信息-选择区域" tabindex="-1">5. 商品信息--选择区域 <a class="header-anchor" href="#_5-商品信息-选择区域" aria-label="Permalink to &quot;5. 商品信息--选择区域&quot;">​</a></h2><h3 id="_5-1-页面结构" tabindex="-1">5.1 页面结构 <a class="header-anchor" href="#_5-1-页面结构" aria-label="Permalink to &quot;5.1 页面结构&quot;">​</a></h3><p>下图红色线表示数据渲染；黄色为动态高亮，要和后面的事件搭配使用；紫色线为事件。</p><p><img src="'+d+'" alt="image.png"></p><h3 id="_5-2-逻辑" tabindex="-1">5.2 逻辑 <a class="header-anchor" href="#_5-2-逻辑" aria-label="Permalink to &quot;5.2 逻辑&quot;">​</a></h3><ul><li>接收数据：</li></ul><p><img src="'+g+'" alt="image.png"></p><ul><li>事件：利用排他思想，先将所有 isChecked 置 0，再将当前置 1。</li></ul><p><img src="'+u+'" alt="image.png"></p><h3 id="_5-3-动态高亮样式" tabindex="-1">5.3 动态高亮样式 <a class="header-anchor" href="#_5-3-动态高亮样式" aria-label="Permalink to &quot;5.3 动态高亮样式&quot;">​</a></h3><p>下图 dd 标签为每个小选项，&amp;.active 即高亮样式。</p><p><img src="'+b+'" alt="image.png"></p>',45),x=[k];function f(P,v,D,I,Z,E){return i(),e("div",null,x)}const T=a(q,[["render",f]]);export{S as __pageData,T as default};
