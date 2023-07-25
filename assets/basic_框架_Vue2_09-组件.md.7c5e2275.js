import{_ as s,c as a,o as l,V as n}from"./chunks/framework.987d87f6.js";const o="/blog-fifi/images/vue2页面组件.png",u=JSON.parse('{"title":"组件","description":"","frontmatter":{},"headers":[],"relativePath":"basic/框架/Vue2/09-组件.md","filePath":"basic/框架/Vue2/09-组件.md"}'),p={name:"basic/框架/Vue2/09-组件.md"},e=n('<h1 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h1><h2 id="组成部分" tabindex="-1">组成部分 <a class="header-anchor" href="#组成部分" aria-label="Permalink to &quot;组成部分&quot;">​</a></h2><p>template、script、style <img src="'+o+`" alt="avatar"></p><h2 id="属性的写法" tabindex="-1">属性的写法 <a class="header-anchor" href="#属性的写法" aria-label="Permalink to &quot;属性的写法&quot;">​</a></h2><ul><li><code>data</code> 属性：以前是对象形式，现在要写成函数，数据写在 <code>return</code> 里。</li><li><code>methods</code> 及其他属性：和前面笔记一样</li></ul><h2 id="在组件-a-中使用组件-b" tabindex="-1">在组件 A 中使用组件 B <a class="header-anchor" href="#在组件-a-中使用组件-b" aria-label="Permalink to &quot;在组件 A 中使用组件 B&quot;">​</a></h2><p>首先，在组件 A 中导入组件 B：在 <code>&lt;script&gt;</code> 标签中这样写</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Helloworld from &#39;./components/Hellolorld.vue&#39; import Test from</span></span>
<span class="line"><span style="color:#A6ACCD;">  ./components/Test.vue&#39;;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>然后，注册节点：可以注册两种节点（私有和全局）。</p><ul><li>私有节点：第一个组件的 <code>&lt;script&gt;</code> 标签中</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    import He1lowor1d from &quot;./components/Hel1oworld.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    import Test from &#39;./components/Test.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        name:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        components: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Test</span><span style="color:#89DDFF;">,}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>全局节点：在 <code>main.js</code> 中这样写</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//导入需要全局注册的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import Count from &#39;@/components/Count .vue &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 参数 1: 字符串格式，表示组件的“注册名称”</span></span>
<span class="line"><span style="color:#A6ACCD;">// 参数 2: 需要被全局注册的那个组件</span></span>
<span class="line"><span style="color:#A6ACCD;">6 Vue.component(&#39;MyCount&#39;,Count)</span></span></code></pre></div><p>最后，在组件 A 中进行调用：在 <code>&lt;template&gt;</code> 标签中这样写</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id-</span><span style="color:#89DDFF;">&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hahaha</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src-</span><span style="color:#89DDFF;">&quot;./assets/logo.png&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Test</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">msg</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">welcome to Your Vue.js App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props-自定义属性" tabindex="-1">props 自定义属性 <a class="header-anchor" href="#props-自定义属性" aria-label="Permalink to &quot;props 自定义属性&quot;">​</a></h2><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><ol><li>数组格式（不能写配置选项）</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //组件的自定义属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  props:[&#39;自定义属性A&#39;, &#39;自定义属性B&#39;, &#39;其它自定义属性...&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ol start="2"><li>对象格式</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自定义属性A: 配置选项,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自定义属性B: 配置选项,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自定义属性B: 配置选项,</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div><h3 id="意义" tabindex="-1">意义 <a class="header-anchor" href="#意义" aria-label="Permalink to &quot;意义&quot;">​</a></h3><p>在组件 B 中设置 <code>props</code> 自定义属性，当组件 A 使用组件 B 时，可以对 <code>props</code> 里面声明的属性进行使用（设置初始值）。</p><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p><code>props</code> 是只读的，不支持修改，所以在组件 A 中对 <code>props</code> 属性赋初值，但在组件 B 中将 <code>props</code> 属性赋值给普通 <code>data</code> 变量，再操作 <code>data</code> 变量</p><ul><li>配置选项 <ol><li><code>default</code> 设置属性初始值</li><li><code>type</code> 设置属性值类型校验，如果传值不符合 type 类型则报错</li><li><code>required</code>（布尔类型）表示这个属性必须在使用组件时使用，如果没用则报错</li></ol></li></ul><h3 id="解决【样式冲突】问题" tabindex="-1">解决【样式冲突】问题 <a class="header-anchor" href="#解决【样式冲突】问题" aria-label="Permalink to &quot;解决【样式冲突】问题&quot;">​</a></h3><ul><li><p>问题 1 描述：例如组件 A 使用了组件 B 和组件 C，此时组件 B 的样式可以应用到组件 C 上，但我们只希望组件 B 的样式应用在组件 B 内。这是因为.vue 文件的样式是全局生效的。</p><ul><li>解决方法 1：在样式定义和使用时添加 data-v-xxx 标记，每个组件有唯一标记。</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right-container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-v-002</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-v-002</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Right组件</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hr</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-v-002</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MyCount</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:init</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6&#39; data-v-002&gt;&lt;/ MyCount&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/template&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">h3</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-v-001</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>解决方法 2：方法 1 太麻烦，Vue 帮我们自动设置了属性。在 <code>&lt;style&gt;</code> 标签内增加 <code>scoped</code> 属性。方法一就是 <code>scoped</code> 的原理。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div></li><li><p>问题 2 描述：应用 scoped 之后，父组件的样式就不能应用到子组件中去。</p><ol><li>应用场景：使用第三方组件库的时候，有修改组件默认样式的需求。</li><li>解决方案：在父组件中，将希望应用到子组件的样式，定义时加上 <code>/deep/</code>（若报错尝试 <code>deep()</code>）标记。</li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/deep/ </span><span style="color:#FFCB6B;">h5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul>`,28),t=[e];function c(r,i,D,y,d,F){return l(),a("div",null,t)}const A=s(p,[["render",c]]);export{u as __pageData,A as default};
