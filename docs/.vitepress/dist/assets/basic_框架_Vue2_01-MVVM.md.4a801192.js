import{_ as e,c as a,o as i,V as t}from"./chunks/framework.987d87f6.js";const o="/blog-fifi/images/数据驱动视图.png",l="/blog-fifi/images/双向数据绑定.png",s="/blog-fifi/images/MVVM工作原理.png",f=JSON.parse('{"title":"MVVM 软件架构","description":"","frontmatter":{},"headers":[],"relativePath":"basic/框架/Vue2/01-MVVM.md","filePath":"basic/框架/Vue2/01-MVVM.md"}'),r={name:"basic/框架/Vue2/01-MVVM.md"},V=t('<h1 id="mvvm-软件架构" tabindex="-1">MVVM 软件架构 <a class="header-anchor" href="#mvvm-软件架构" aria-label="Permalink to &quot;MVVM 软件架构&quot;">​</a></h1><h2 id="vue-的两大特性" tabindex="-1">Vue 的两大特性 <a class="header-anchor" href="#vue-的两大特性" aria-label="Permalink to &quot;Vue 的两大特性&quot;">​</a></h2><ul><li>数据驱动视图：页面数据发生变化时，vue 会自动渲染页面结构。这是单向的数据绑定 <img src="'+o+'" alt="avatar"></li><li>双向数据绑定：js 数据的变化会被自动渲染到页面；页面上表单采集的数据变化时会被 vue 同步到 js 数据中。 <img src="'+l+'" alt="avatar"></li></ul><h2 id="mvvm-核心原理" tabindex="-1">MVVM 核心原理 <a class="header-anchor" href="#mvvm-核心原理" aria-label="Permalink to &quot;MVVM 核心原理&quot;">​</a></h2><p>ViewModel 作为 MVVM 的核心，是它把当前页面的数据源（Model）和页面结构（View）连接在一起。 <img src="'+s+'" alt="avatar"></p><ul><li>当 Model 发生变化，会被 ViewModel 监听到，自动更新到 View。</li><li>当 表单元素的值发生变化，也会被 ViewModel 监听到，将其自动同步到 Model 中。</li></ul>',6),c=[V];function _(n,m,d,M,u,h){return i(),a("div",null,c)}const v=e(r,[["render",_]]);export{f as __pageData,v as default};
