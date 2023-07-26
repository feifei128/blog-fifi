import{_ as s,c as a,o as n,V as l}from"./chunks/framework.987d87f6.js";const p="/blog-fifi/images/交易1.png",o="/blog-fifi/images/交易2.png",e="/blog-fifi/images/交易3.png",t="/blog-fifi/images/交易4.png",c="/blog-fifi/images/交易5.png",r="/blog-fifi/images/交易6.png",y="/blog-fifi/images/交易7.png",F="/blog-fifi/images/交易8.png",i="/blog-fifi/images/交易9.png",D="/blog-fifi/images/交易10.png",g="/blog-fifi/images/交易11.png",C="/blog-fifi/images/交易12.png",m="/blog-fifi/images/交易13.png",A="/blog-fifi/images/交易14.png",f="/blog-fifi/images/交易15.png",u="/blog-fifi/images/交易16.png",k=JSON.parse('{"title":"交易支付","description":"","frontmatter":{},"headers":[],"relativePath":"projects/shangpinhui/11-交易支付.md","filePath":"projects/shangpinhui/11-交易支付.md"}'),h={name:"projects/shangpinhui/11-交易支付.md"},d=l('<h1 id="交易支付" tabindex="-1">交易支付 <a class="header-anchor" href="#交易支付" aria-label="Permalink to &quot;交易支付&quot;">​</a></h1><h2 id="_1-交易-trade-页面" tabindex="-1">1. 交易 Trade 页面 <a class="header-anchor" href="#_1-交易-trade-页面" aria-label="Permalink to &quot;1. 交易 Trade 页面&quot;">​</a></h2><h2 id="_1-1-整体思路" tabindex="-1">1.1 整体思路 <a class="header-anchor" href="#_1-1-整体思路" aria-label="Permalink to &quot;1.1 整体思路&quot;">​</a></h2><p>先复制静态组件，新的页面要设置新的路由，成功跳转后实现数据的动态展示。动态展示数据的步骤：写接口、写 vuex、去页面结构中渲染数据、写逻辑实现动态。动态展示数据的代码不再复制粘贴了，和前面笔记内容类似。</p><h2 id="_1-2-提交订单业务" tabindex="-1">1.2 <strong>提交订单业务</strong> <a class="header-anchor" href="#_1-2-提交订单业务" aria-label="Permalink to &quot;1.2 **提交订单业务**&quot;">​</a></h2><ul><li><p>思路：在 Trade 里点击提交订单按钮触发点击事件，将接口文档里提供的所有参数都通过派发 action 的方式提交给服务器，并在 mutation 中进行跳转至 Pay 页面。至此提交订单给服务器的操作就完成了，至于 Pay 如何接收订单信息是 Pay 页面该操心的事。</p></li><li><p>代码</p><ul><li><p>接口</p><p><img src="'+p+'" alt="image.png"></p></li><li><p>vuex</p></li></ul><p><img src="'+o+'" alt="image.png"></p><ul><li>页面结构</li></ul><p><img src="'+e+'" alt="image.png"></p><ul><li>逻辑</li></ul><p><img src="'+t+'" alt="image.png"></p></li></ul><h2 id="_2-支付-pay-页面" tabindex="-1">2. 支付 Pay 页面 <a class="header-anchor" href="#_2-支付-pay-页面" aria-label="Permalink to &quot;2. 支付 Pay 页面&quot;">​</a></h2><h3 id="_2-1-思路" tabindex="-1">2.1 思路 <a class="header-anchor" href="#_2-1-思路" aria-label="Permalink to &quot;2.1 思路&quot;">​</a></h3><p>复制粘贴静态组件，写接口，搭建 vuex，实现动态数据展示。注意，由于 Trade 传来的 orderId 参数是通过路由地址传来的，所以取参数应该用 this.$route.query.orderId。获取到 orderId 以后，用它来向服务器请求对应的订单支付信息（其中包含支付金额），这才是我们新写的接口的用处。除了基本的数据渲染外，特殊的业务有微信支付二维码，记录如下。</p><h3 id="_2-2-数据渲染代码" tabindex="-1">2.2 数据渲染代码 <a class="header-anchor" href="#_2-2-数据渲染代码" aria-label="Permalink to &quot;2.2 数据渲染代码&quot;">​</a></h3><ol><li>接口</li></ol><p><img src="'+c+'" alt="image.png"></p><ol start="2"><li>vuex</li></ol><p><img src="'+r+'" alt="image.png"></p><ol start="3"><li>页面结构</li></ol><p><img src="'+y+'" alt="image.png"></p><ol start="4"><li>逻辑</li></ol><p><img src="'+F+'" alt="image.png"></p><h3 id="_2-3-支付二维码" tabindex="-1">2.3 支付二维码 <a class="header-anchor" href="#_2-3-支付二维码" aria-label="Permalink to &quot;2.3 支付二维码&quot;">​</a></h3><ol><li><p>element-ui：是 vue 的客户端组件库（Vant 是移动端的），可以用来建立支付二维码的弹窗。</p><ul><li>安装：npm i --save element-ui</li><li>配置：从 element-ui 官网的快速入门教程可以直接复制。</li></ul><p><img src="'+i+'" alt="image.png"></p><ul><li><p>为了实现按需引入项目而非完整引入，还需借助 babel-plugin-component 包：npm install babel-plugin-component -D</p></li><li><p>在 main.js 中注册</p><ul><li><p>注册全局组件：</p><p><img src="'+D+'" alt="image.png"></p></li><li><p>挂在原型上注册：element-ui 官网提供了注册代码，直接复制即可。</p><p><img src="'+g+'" alt="image.png"></p></li></ul></li><li><p>使用方法：</p></li></ul><p><img src="'+C+'" alt="image.png"></p><ul><li>效果</li></ul><p><img src="'+m+'" alt="image.png"></p></li><li><p>qrcode 包：可以生产二维码</p><ul><li><p>安装：<code>npm i qrcode -S</code></p></li><li><p>引入：在需要二维码的页面引入即可</p></li></ul><p><img src="'+A+'" alt="image.png"></p></li><li><p>思路</p></li></ol><p>支付二维码可以使用 element-ui 提供的 MessageBox 弹框来实现，弹窗类型有很多，这里我们选择 HTML 片段。基础代码直接复制官网提供的，然后可以按需对其进行内容和参数的调整。</p><p>首先，用 qrcode 创建一个二维码，二维码的地址是从 vuex 中拉取到的；</p><p>其次，创建弹窗，把二维码放到弹框中显示出来；</p><p>再次，设计一个定时器，用于监测用户是否支付成功，如果支付成功，直接关闭弹框并跳转至支付成功页面，如果未支付成功则一直等待；</p><p>最后，利用 msgbox 的回调函数 beforeClose 来判断当用户点击取消和“已支付”按钮来关闭弹框时是否合法，若点击“已支付”按钮却没有真的支付，是不给予放行的。</p><ol start="4"><li><p>代码</p></li><li><p>页面结构</p></li></ol><p><img src="'+f+`" alt="image.png"></p><ol start="2"><li>逻辑</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建弹框，用于支付二维码</span></span>
<span class="line"><span style="color:#A6ACCD;">    async </span><span style="color:#82AAFF;">openQRCode</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">// 1. 生成一个二维码 URL</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">QRCode</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toDataURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">payInfo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">codeUrl</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 创建弹框</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">// 第一个参数:即为内容区域</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">// 第二个参数:标题</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">// 第三个参数:组件的配置项</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;img src=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请你微信扫码支付</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        dangerouslyUseHTMLString</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 将字符串转换为标签</span></span>
<span class="line"><span style="color:#F07178;">        center</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 居中</span></span>
<span class="line"><span style="color:#F07178;">        showClose</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 右上角的关闭按钮不显示</span></span>
<span class="line"><span style="color:#F07178;">        confirmButtonText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">支付成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 确定按钮的文本</span></span>
<span class="line"><span style="color:#F07178;">        showCancelButton</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 显示取消按钮</span></span>
<span class="line"><span style="color:#F07178;">        cancelButtonText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">支付遇见问题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 取消按钮的文本</span></span>
<span class="line"><span style="color:#F07178;">        closeOnClickModal</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 点击遮罩层关闭 messagebox</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. 若用户手动点击“已支付”，判断该行为是否合法</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">beforeClose</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">action</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">instance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">done</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 在消息盒子关闭之前会触发</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// action 参数:可以区分用户点击的是取消【cancel】、确定【confirm】</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// instance 参数:当前消息框组件 VC</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// done 参数：是一个函数,函数可以关闭消息盒子</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this.code= </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">confirm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">点击“已支付”，且支付成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;font-style:italic;">// 清除定时器</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;font-style:italic;">// 关闭盒子</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">done</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;font-style:italic;">// 路由跳转</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/paysuccess</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cancel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;font-style:italic;">// 清除定时器</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#676E95;font-style:italic;">// 关闭盒子</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">done</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">支付遇见问题请联系超管豪哥</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">// 查询支付结果,开启定时器每隔一段时间询问支付结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. 用定时器判断用户是否支付成功</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">// eslint-disable-next-line space-before-function-paren</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setInterval</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">// 发请求获取支付结果</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getPayStatus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">orderId</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回数据当中：code=200 代表支付成功  code=205 未支付</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">payStatus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 支付成功了</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 存储一下支付成功的 code 数值，通过他判断支付是否成功</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">payStatus</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 清除定时器</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 关闭 messagebox</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$msgbox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 在路由跳转</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/paySuccess</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#676E95;font-style:italic;">// 未支付</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">payStatus</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_3-支付成功-paysuccess-页面" tabindex="-1">3. 支付成功 PaySuccess 页面 <a class="header-anchor" href="#_3-支付成功-paysuccess-页面" aria-label="Permalink to &quot;3. 支付成功 PaySuccess 页面&quot;">​</a></h2><ul><li>效果</li></ul><p><img src="`+u+'" alt="image.png"></p><ul><li>思路：只需要复制静态组件进来，两个按钮能成功跳转即可。</li></ul>',33),_=[d];function E(b,x,q,P,v,S){return n(),a("div",null,_)}const $=s(h,[["render",E]]);export{k as __pageData,$ as default};
