import{_ as s,c as n,o as a,V as l}from"./chunks/framework.987d87f6.js";const C=JSON.parse('{"title":"继承","description":"","frontmatter":{},"headers":[],"relativePath":"basic/基础/JS高级/09-继承.md","filePath":"basic/基础/JS高级/09-继承.md"}'),p={name:"basic/基础/JS高级/09-继承.md"},o=l(`<h1 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h1><h2 id="es5-继承" tabindex="-1">ES5 继承 <a class="header-anchor" href="#es5-继承" aria-label="Permalink to &quot;ES5 继承&quot;">​</a></h2><p>原型链继承 / 构造继承 / 复制继承 / 组合继承 / 寄生组合继承</p><h3 id="原型链继承" tabindex="-1">原型链继承 <a class="header-anchor" href="#原型链继承" aria-label="Permalink to &quot;原型链继承&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">say</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> son.prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 此时son.constructor指向的是Father</span></span>
<span class="line"><span style="color:#A6ACCD;">son</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> son</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 优点:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.简单，容易实现</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.继承关系纯粹：生成的实例即是子类的实例，也是父类的实例。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.可以通过子类直接访问父类原型链属性和函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 缺点：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.子类的所有实例共享父类的属性，如果父类中有引用类型，某个子类改变值会引起其他子类中的值发生变化。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.在创建子类实现时，无法向父类的构造函数传递参数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.无法实现多继承</span></span></code></pre></div><h3 id="构造继承" tabindex="-1">构造继承 <a class="header-anchor" href="#构造继承" aria-label="Permalink to &quot;构造继承&quot;">​</a></h3><p>是在子类的构造函数中通过 <code>call</code> 函数改变 <code>this</code> 的指向，调用父类的构造函数，从而能将父类的实例的属性和函数绑定到子类的 <code>this</code> 上.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">say</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Son</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">like</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 执行Father并且改变this指向</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">like</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">like</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 优点：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.可解决子类实例的共享父类属性的问题：call函数实际是改变了父类构造函数中this的指向，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.创建子类的实例时，可以向父类传递参数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.可以实现多继承</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 缺点：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.实例只是子类的实例,并不是父类的实例。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.只能继承父类实例的属性和函数。并不能继承原型对象上的属性和函数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.无法复用父类的实例函数，子类生成的每个实例都会拥有父类实例函数的引用，这回造成不必要的内存消耗。影响性能。</span></span></code></pre></div><h3 id="复制继承" tabindex="-1">复制继承 <a class="header-anchor" href="#复制继承" aria-label="Permalink to &quot;复制继承&quot;">​</a></h3><p>首先生成父类的实例，然后通过 <code>for ..in</code> 遍历父类实例的属性和函数，并将其依次设置为子类实例的属性和函数或者原型对象上的属性和函数。</p><h3 id="组合继承" tabindex="-1">组合继承 <a class="header-anchor" href="#组合继承" aria-label="Permalink to &quot;组合继承&quot;">​</a></h3><p>组合了构造继承和原型继承两种方法，一方面在子类的构造函数中通过 <code>call</code> 函数调用父类的构造函数，将父类的实例的属性和函数绑定到子类的 this 中，另一方面，通过改变子类的 <code>prototype</code> 属性，继承父类的原型对象上的属性和函数。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 父类</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将需要复用和共享的方法定义在父类原型上</span></span>
<span class="line"><span style="color:#FFCB6B;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 子类</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Son</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">like</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">like</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 执行Father并且改变this指向</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">like</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">like</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Son</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">Son</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Son</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 优点：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.既能继承父类实例的属性和函数，又能继承原型对象的属性和函数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.即是子类的实例，又是父类的实例。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.不存在引用属性共享的问题</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.可以向父类的构造函数中传递参数：call函数可以向父类的构造函数中传递参数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 缺点：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 由于调用了两次父类的构造方法（第11和14行），会存在一份多余的父类实例属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 优化缺点：将第14和15行改为下述代码</span></span>
<span class="line"><span style="color:#FFCB6B;">Son</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#676E95;font-style:italic;">// 核心</span></span></code></pre></div><h3 id="寄生组合继承" tabindex="-1">寄生组合继承 <a class="header-anchor" href="#寄生组合继承" aria-label="Permalink to &quot;寄生组合继承&quot;">​</a></h3><p>为了解决父类的构造函数被调用两次的问题</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 父类</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Father</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将需要复用和共享的方法定义在父类原型上</span></span>
<span class="line"><span style="color:#FFCB6B;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 子类</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Son</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">like</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">like</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 执行Father并且改变this指向</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">like</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">like</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Son</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Father</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype)</span></span>
<span class="line"><span style="color:#FFCB6B;">Son</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Son</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 优点：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.既能继承父类实例的属性和函数，又能继承原型对象的属性和函数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.即是子类的实例，又是父类的实例。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.不存在引用属性共享的问题</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.可以向父类的构造函数中传递参数：call函数可以向父类的构造函数中传递参数。</span></span></code></pre></div><h2 id="那么-es6-如何实现继承呢" tabindex="-1">那么 ES6 如何实现继承呢？ <a class="header-anchor" href="#那么-es6-如何实现继承呢" aria-label="Permalink to &quot;那么 ES6 如何实现继承呢？&quot;">​</a></h2><p>注意一下几点即可：</p><ul><li><p><code>extends</code>：使用 <code>extends</code> 来实现继承。</p></li><li><p><code>this</code> 实例化对象：类中方法里的 <code>this</code> 指的是调用该方法的元素或对象，若需要方法里的 <code>this</code> 指的还是实例化对象，则在构造方法中将 <code>this</code> 赋值给一个全局变量 that，然后在方法中使用 that。</p></li><li><p><code>super()</code> 用在 <code>this</code> 前面。</p></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Parent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yellow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// class 实现继承的核心在于使用 extends 表明继承自哪个父类，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 并且在子类构造函数中必须调用 super，因为这段代码可以看成 Parent.call(this, value)。</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Child</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Parent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,20),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};
