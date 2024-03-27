import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog-fifi',
  title: "blog-fifi",
  description: "fifi的博客",
  head: [
    ['link', { rel: 'icon', href: '/images/枸杞.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/枸杞.svg',
    nav: [
      {
        text: '🏠 主页', link: '/',
      },
      {
        text: '📚 基础知识',
        items: [
          { text: "🍂 前端工具", link: "/basic/前端工具/01-VS Code的使用.md" },
          { text: "🍂 前端基础", link: "/basic/基础/HTML/01-认识Web.md" },
          { text: "🍂 前端框架", link: "/basic/框架/Vue2/01-MVVM.md" },
          { text: "🍂 服务端", link: "/basic/服务端/Nodejs/00-快速开始.md" }
        ],
      },
      {
        text: '📝 源码阅读',
        items: [
          { text: "🍂 Riot.js", link: "/code/riot/01-响应性.md" },
          { text: "🍂 Vue.js", link: "/code/vue/响应性/01-简介.md" },
          { text: '🍂 Formily', link: '/code/formily/简介.md' },
        ],
      },
      {
        text: '🖊️ 项目笔记',
        items: [
          { text: "🍂 Games", link: '/projects/minesWeeper.md' },
          { text: "🍂 React", link: '/projects/smartAppAdmin.md' },
          { text: "🍂 Vue", link: '/projects/shangpinhui/01-简介.md' },
        ],
      },
    ],

    sidebar: {
      '/basic/': [
        {
          text: '🛠️ 前端工具',
          collapsed: true,
          items: [
            {
              text: '☑️ 01 VS Code',
              link: '/basic/前端工具/01-VS Code的使用.md',

            },
            { text: '☑️ 02 Git', link: '/basic/前端工具/02-Git的使用.md' },
            { text: '☑️ 02 Oh My Zsh', link: '/basic/前端工具/03-zsh.md' },
          ]
        },
        {
          text: '📚 前端基础',
          collapsed: true,
          items: [
            {
              text: 'HTML',
              collapsed: true,
              items: [
                { text: '☑️ 01 认识Web', link: '/basic/基础/HTML/01-认识Web.md' },
                { text: '☑️ 02 浏览器', link: '/basic/基础/HTML/02-浏览器.md' },
                { text: '☑️ 03 HTML', link: '/basic/基础/HTML/03-HTML.md' },
                { text: '☑️ 04 排版标签', link: '/basic/基础/HTML/04-排版标签.md' },
                { text: '☑️ 05 字体标签和超链接', link: '/basic/基础/HTML/05-字体标签和超链接.md' },
                { text: '☑️ 06 图片标签', link: '/basic/基础/HTML/06-图片标签.md' },
                { text: '☑️ 07 其他标签', link: '/basic/基础/HTML/07-其他标签.md' },
                { text: '☑️ 08 HTML5（上）', link: '/basic/基础/HTML/08-HTML5（上）.md' },
                { text: '☑️ 09 HTML5（中）', link: '/basic/基础/HTML/09-HTML5（中）.md' },
                { text: '☑️ 10 HTML5（下）', link: '/basic/基础/HTML/10-HTML5（下）.md' },
              ]
            },
            {
              text: 'CSS',
              collapsed: true,
              items: [
                { text: '☑️ 01 字体和文字属性', link: '/basic/基础/CSS/01-CSS属性：字体属性和文本属性.md' },
                { text: '☑️ 02 背景属性', link: '/basic/基础/CSS/02-CSS属性：背景属性.md' },
                { text: '☑️ 03 样式表和选择器', link: '/basic/基础/CSS/03-CSS样式表和选择器.md' },
                { text: '☑️ 04 伪类', link: '/basic/基础/CSS/04-CSS选择器：伪类.md' },
                { text: '☑️ 05 样式表的特性', link: '/basic/基础/CSS/05-CSS样式表的继承性和层叠性.md' },
                { text: '☑️ 06 盒模型', link: '/basic/基础/CSS/06-CSS盒模型详解.md' },
                { text: '☑️ 07 浮动', link: '/basic/基础/CSS/07-浮动.md' },
                { text: '☑️ 08 定位属性', link: '/basic/基础/CSS/08-CSS属性：定位属性.md' },
                { text: '☑️ 09 CSS3：选择器', link: '/basic/基础/CSS/09-CSS3-选择器.md' },
                { text: '☑️ 10 CSS3：属性（一）', link: '/basic/基础/CSS/10-CSS3属性详解（一）.md' },
                { text: '☑️ 11 CSS3：属性（二）', link: '/basic/基础/CSS/11-CSS3属性详解：动画详解.md' },
                { text: '☑️ 12 CSS3：属性（三）', link: '/basic/基础/CSS/12-CSS3属性：Flex布局图文详解.md' },
                { text: '☑️ 13 Sass', link: '/basic/基础/CSS/13-Sass入门.md' },
              ]
            },
            {
              text: 'JS进阶',
              collapsed: true,
              items: [
                { text: '☑️ 01 数组', link: '/basic/基础/JS高级/01-数组.md' },
                { text: '☑️ 02 函数', link: '/basic/基础/JS高级/02-函数.md' },
                { text: '☑️ 03 构造函数和原型', link: '/basic/基础/JS高级/03-构造函数和原型.md' },
                { text: '☑️ 04 This', link: '/basic/基础/JS高级/04-This.md' },
                { text: '☑️ 05 Call / Apply / Bind', link: '/basic/基础/JS高级/05-call、apply 和 bind.md' },
                { text: '☑️ 06 闭包', link: '/basic/基础/JS高级/06-闭包.md' },
                { text: '☑️ 07 对象', link: '/basic/基础/JS高级/07-对象的基本操作.md' },
                { text: '☑️ 08 深浅拷贝', link: '/basic/基础/JS高级/08-浅拷贝和深拷贝.md' },
                { text: '☑️ 09 继承', link: '/basic/基础/JS高级/09-继承.md' },
                { text: '☑️ 10 正则表达式', link: '/basic/基础/JS高级/10-正则表达式.md' },
                { text: '☑️ 11 DOM', link: '/basic/基础/JS高级/11-DOM简介和DOM操作.md' },
                { text: '☑️ 12 事件', link: '/basic/基础/JS高级/12-事件的绑定和事件对象Event.md' },
                { text: '☑️ 13 事件传播和事件冒泡', link: '/basic/基础/JS高级/13-事件的传播和事件冒泡.md' },
                { text: '☑️ 14 事件委托', link: '/basic/基础/JS高级/14-事件委托.md' },
              ]
            },
          ]
        },
        {
          text: '📚 前端进阶',
          collapsed: true,
          items: [
            {
              text: 'TypeScript',
              collapsed: true,
              items: [
                { text: '☑️ 01 快速开始', link: '/basic/基础/TS/01-快速开始.md' },
                { text: '☑️ 02 基本数据类型', link: '/basic/基础/TS/02-基本数据类型.md' },
                { text: '☑️ 03 类型断言', link: '/basic/基础/TS/03-类型断言.md' },
                { text: '☑️ 04 编译选项', link: '/basic/基础/TS/04-编译选项.md' },
                { text: '☑️ 05 Webpack配置', link: '/basic/基础/TS/05-webpack配置.md' },
                { text: '☑️ 06 接口', link: '/basic/基础/TS/06-接口.md' },
                { text: '☑️ 07 泛型', link: '/basic/基础/TS/07-泛型.md' },
                { text: '☑️ 08 面向对象', link: '/basic/基础/TS/08-面向对象.md' },
              ]
            },
          ]
        },
        {
          text: '🔥 前端框架',
          collapsed: true,
          items: [
            {
              text: 'Vue2',
              collapsed: true,
              items: [
                { text: '☑️ 01 MVVM', link: '/basic/框架/Vue2/01-MVVM.md' },
                { text: '☑️ 02 如何运行一个Vue？', link: '/basic/框架/Vue2/02-如何运行一个Vue.md' },
                { text: '☑️ 03 常用指令', link: '/basic/框架/Vue2/03-常用指令.md' },
                { text: '☑️ 04 过滤器(Vue3已弃用)', link: '/basic/框架/Vue2/04-过滤器.md' },
                { text: '☑️ 05 侦听器', link: '/basic/框架/Vue2/05-侦听器.md' },
                { text: '☑️ 06 计算属性', link: '/basic/框架/Vue2/06-计算属性.md' },
                { text: '☑️ 07 Axios', link: '/basic/框架/Vue2/07-Axios.md' },
                { text: '☑️ 08 快速生成Vue2项目', link: '/basic/框架/Vue2/08-快速生成Vue2项目.md' },
                { text: '☑️ 09 组件', link: '/basic/框架/Vue2/09-组件.md' },
                { text: '☑️ 10 生命周期', link: '/basic/框架/Vue2/10-生命周期.md' },
                { text: '☑️ 11 Vue中的Ajax请求', link: '/basic/框架/Vue2/11-Vue中的Ajax请求.md' },
                { text: '☑️ 12 组件传值', link: '/basic/框架/Vue2/12-组件传值.md' },
                { text: '☑️ 13 路由', link: '/basic/框架/Vue2/13-路由.md' },
                { text: '☑️ 14 Ref', link: '/basic/框架/Vue2/14-ref.md' },
              ]
            },
            {
              text: 'Vue3',
              collapsed: true,
              items: [
                { text: '☑️ 01 创建项目', link: '/basic/框架/Vue3/01-创建vue3项目.md' },
                // { text: '☑️ 02 setup / reactive / ref', link: '/basic/框架/Vue3/02-setup reactive ref.md' },
                { text: '☑️ 03 响应式原理', link: '/basic/框架/Vue3/03-响应式原理.md' },
                { text: '☑️ 04 Computed / Watch', link: '/basic/框架/Vue3/04-计算属性.md' },
                { text: '☑️ 05 Watch', link: '/basic/框架/Vue3/05-侦听器.md' },
                { text: '☑️ 06 生命周期', link: '/basic/框架/Vue3/06-生命周期.md' },
                { text: '☑️ 07 模板引用', link: '/basic/框架/Vue3/07-模板引用.md' },
                { text: '☑️ 08 动态组件', link: '/basic/框架/Vue3/08-动态组件.md' },
                { text: '☑️ 09 Props', link: '/basic/框架/Vue3/09-props.md' },
                { text: '☑️ 10 Attributes继承', link: '/basic/框架/Vue3/10-Attributes继承.md' },
                { text: '☑️ 11 provide / inject', link: '/basic/框架/Vue3/11-provide与inject.md' },
                { text: '☑️ 12 异步组件', link: '/basic/框架/Vue3/12-异步组件.md' },
                { text: '☑️ 13 hooks', link: '/basic/框架/Vue3/13-hooks.md' },
                { text: '☑️ 14 Teleport CSS功能', link: '/basic/框架/Vue3/14-Teleport CSS功能.md' },
                { text: '☑️ 15 其他组合式API', link: '/basic/框架/Vue3/15-其它组合式API.md' },
                { text: '☑️ 16 Pinia', link: '/basic/框架/Vue3/16-Pinia.md' },
                { text: '☑️ 17 路由', link: '/basic/框架/Vue3/17-路由.md' },
                { text: '☑️ 18 自动导入配置', link: '/basic/框架/Vue3/18-vue3自动导入配置.md' },
              ]
            },
            {
              text: 'React18',
              collapsed: true,
              items: [
                { text: '☑️ 01 脚手架', link: '/basic/框架/React/01-脚手架.md' },
                { text: '☑️ 02 组件', link: '/basic/框架/React/02-组件.md' },
                { text: '☑️ 03 事件处理', link: '/basic/框架/React/03-事件处理.md' },
                { text: '☑️ 04 组件实例的三大属性', link: '/basic/框架/React/04-组件实例的三大属性.md' },
                { text: '☑️ 05 生命周期', link: '/basic/框架/React/05-生命周期.md' },
                { text: '☑️ 06 react高级（上）', link: '/basic/框架/React/06-react高级（上）.md' },
                { text: '☑️ 07 react高级（下）', link: '/basic/框架/React/07-react高级（下）.md' },
                { text: '☑️ 08 路由 v5', link: '/basic/框架/React/08-react-router 5.md' },
                { text: '☑️ 09 路由 v6', link: '/basic/框架/React/09-react-router 6.md' },
                { text: '☑️ 10 Hooks（上）', link: '/basic/框架/React/10-react-Hook （上）.md' },
                { text: '☑️ 11 Hooks（下）', link: '/basic/框架/React/11-react-Hook （下）.md' },
                // { text: '☑️ 12 Redux', link: '/basic/框架/React/12-redux.md' },
                // { text: '☑️ 13 Redux Toolkit', link: '/basic/框架/React/13-Redux Toolkit.md' },
                // { text: '☑️ 14 RTK Query', link: '/basic/框架/React/14-RTK Query.md' },
              ]
            }

          ]
        },
        {
          text: '🐞 前端工程化',
          collapsed: true,
          items: [
            {
              text: 'Webpack',
              items: [
                { text: '☑️ 01 开始', link: '/basic/工程化/Webpack/01-开始.md' },
                { text: '☑️ 02 插件', link: '/basic/工程化/Webpack/02-插件.md' },
                { text: '☑️ 03 加载器', link: '/basic/工程化/Webpack/03-加载器.md' },
                { text: '☑️ 04 打包发布', link: '/basic/工程化/Webpack/04-打包发布.md' },
              ]
            },

          ]
        },
        {
          text: '💽 服务端',
          collapsed: true,
          items: [
            {
              text: "Nodejs",
              collapsed: true,
              items: [
                { text: "☑️ 01 快速开始", link: "/basic/服务端/Nodejs/00-快速开始.md" },
                { text: "☑️ 02 模块化", link: "/basic/服务端/Nodejs/01-模块化.md" },
                { text: "☑️ 03 FS 文件系统模块", link: "/basic/服务端/Nodejs/02-FS文件系统模块.md" },
                { text: "☑️ 04 Path 路径模块", link: "/basic/服务端/Nodejs/03-path路径模块.md" },
                { text: "☑️ 05 HTTP 模块", link: "/basic/服务端/Nodejs/04-http模块.md" },
                { text: "☑️ 06 npm 包管理", link: "/basic/服务端/Nodejs/05-npm包管理.md" },
                { text: "☑️ 07 Express", link: "/basic/服务端/Nodejs/06-Express.md" },
                { text: "☑️ 08 路由", link: "/basic/服务端/Nodejs/07-路由.md" },
                { text: "☑️ 09 中间件", link: "/basic/服务端/Nodejs/08-中间件.md" },
                { text: "☑️ 10 跨域", link: "/basic/服务端/Nodejs/09-跨域.md" },
                { text: "☑️ 11 身份认证机制", link: "/basic/服务端/Nodejs/10-认证机制.md" }
              ],
            }
          ],
        },
        {
          text: '🐞 其他',
          collapsed: true,
          items: [
            {
              text: 'ChatGPT',
              items: [
                { text: '🪜 接口 1', link: 'https://poe.com/' },
                { text: '🪜 接口 2', link: 'https://freegpt.one/' },
                { text: '🪜 接口 3', link: 'https://chatbot.theb.ai/' }
              ]
            },

          ]
        }
      ],
      '/code/': [
        {
          text: 'Riot.js',
          collapsed: true,
          items: [
            { text: '☑️ 01 响应性', link: '/code/riot/01-响应性.md' },
            { text: '☑️ 02 生命周期', link: '/code/riot/02-生命周期.md' },
            { text: '☑️ 03 虚拟DOM', link: '/code/riot/03-虚拟DOM.md' }
          ]
        },
        {
          text: 'Vue.js',
          collapsed: true,
          items: [
            {
              text: '响应性',
              collapsed: true,
              items: [
                { text: '☑️ 01 介绍', link: '/code/vue/响应性/01-简介.md' },
                { text: '☑️ 02 Reactive', link: '/code/vue/响应性/02-reactive.md' },
                { text: '☑️ 03 依赖收集', link: '/code/vue/响应性/03-依赖收集.md' },
                { text: '☑️ 04 派发更新', link: '/code/vue/响应性/04-派发更新.md' },
              ]
            },
            {
              text: '常用指令',
              collapsed: true,
              items: [
                { text: '☑️ 01 v-if', link: '/code/vue/常用指令/01-v-if.md' },
                { text: '☑️ 02 v-show', link: '/code/vue/常用指令/02-v-show.md' },
              ]
            },
          ]
        },
        {
          text: 'Formily',
          link: '/code/formily/简介.md'
        },
      ],
      '/projects/': [
        {
          text: 'Games',
          collapsed: true,
          items: [
            { text: '☑️ 01 扫雷', link: '/projects/minesWeeper.md' },
            { text: '☑️ 02 功德无量', link: '/projects/woodenFish.md' },
          ]
        },
        {
          text: 'React 项目',
          collapsed: true,
          items: [
            { text: '☑️ 01 智能家电后台', link: '/projects/smartAppAdmin.md' },
          ]
        },
        {
          text: 'Vue 项目',
          collapsed: true,
          items: [
            {
              text: '尚品汇',
              items: [
                { text: '☑️ 01 项目简介', link: '/projects/shangpinhui/01-简介.md' },
                { text: '☑️ 02 三级联动导航', link: '/projects/shangpinhui/02-三级联动导航.md' },
                { text: '☑️ 03 轮播图', link: '/projects/shangpinhui/03-轮播图.md' },
                { text: '☑️ 04 面包屑', link: '/projects/shangpinhui/04-面包屑.md' },
                { text: '☑️ 05 分页器', link: '/projects/shangpinhui/05-分页器.md' },
                { text: '☑️ 06 商品详情页', link: '/projects/shangpinhui/06-商品详情页.md' },
                { text: '☑️ 07 加购功能', link: '/projects/shangpinhui/07-加购功能.md' },
                { text: '☑️ 08 购物车', link: '/projects/shangpinhui/08-购物车.md' },
                { text: '☑️ 09 登录注册', link: '/projects/shangpinhui/09-登录注册.md' },
                { text: '☑️ 10 导航守卫', link: '/projects/shangpinhui/10-导航守卫.md' },
                { text: '☑️ 11 交易支付', link: '/projects/shangpinhui/11-交易支付.md' },
                { text: '☑️ 12 我的订单', link: '/projects/shangpinhui/12-我的订单.md' },
                { text: '☑️ 13 懒加载', link: '/projects/shangpinhui/13-懒加载.md' },
                { text: '☑️ 14 表单验证', link: '/projects/shangpinhui/14-表单验证.md' },
                { text: '☑️ 15 打包部署', link: '/projects/shangpinhui/15-打包部署.md' },
              ]
            },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/feifei128/' }
    ],

    footer: {
      copyright: 'Copyright © 2022-present fifi'
    },
    search: {
      provider: 'local'
    }
  }
})
