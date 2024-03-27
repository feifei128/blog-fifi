# Webpack 配置

## 项目基本配置

- 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS 同样也可以结合构建工具一起使用，下边以 webpack 为例介绍一下如何结合构建工具使用 TS。

- 步骤：

  1. 初始化项目

     - 进入项目根目录，执行命令 ` npm init -y`
       - 主要作用：创建 package.json 文件

  2. 下载构建工具

     - `npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`
       - 共安装了 7 个包
         - webpack
           - 构建工具 webpack
         - webpack-cli
           - webpack 的命令行工具
         - webpack-dev-server
           - webpack 的开发服务器
         - typescript
           - ts 编译器
         - ts-loader
           - ts 加载器，用于在 webpack 中编译 ts 文件
         - html-webpack-plugin
           - webpack 中 html 插件，用来自动创建 html 文件
         - clean-webpack-plugin
           - webpack 中的清除插件，每次构建都会先清除目录

  3. 根目录下创建 webpack 的配置文件 webpack.config.js

     - ```javascript
       // 引入一个包
       const path = require('path')
       // 引入html插件
       const HTMLWebpackPlugin = require('html-webpack-plugin')

       // webpack中的所有的配置信息都应该写在module.exports中
       module.exports = {
         // 指定入口文件
         entry: './src/index.ts',

         // 指定打包文件所在目录
         output: {
           // 指定打包文件的目录
           path: path.resolve(__dirname, 'dist'),
           // 打包后文件的文件
           filename: 'bundle.js',

           // 告诉webpack不使用箭头
           environment: {
             arrowFunction: false,
           },

           clean: true,
         },

         // 指定webpack打包时要使用模块
         module: {
           // 指定要加载的规则
           rules: [
             {
               // test指定的是规则生效的文件
               test: /\.ts$/,
               // 要使用的loader
               use: [
                 // 配置babel
                 {
                   // 指定加载器
                   loader: 'babel-loader',
                   // 设置babel
                   options: {
                     // 设置预定义的环境
                     presets: [
                       [
                         // 指定环境的插件
                         '@babel/preset-env',
                         // 配置信息
                         {
                           // 要兼容的目标浏览器
                           targets: {
                             chrome: '58',
                             ie: '11',
                           },
                           // 指定corejs的版本
                           corejs: '3',
                           // 使用corejs的方式 "usage" 表示按需加载
                           useBuiltIns: 'usage',
                         },
                       ],
                     ],
                   },
                 },
                 'ts-loader',
               ],
               // 要排除的文件
               exclude: /node-modules/,
             },
           ],
         },

         // 配置Webpack插件
         plugins: [
           new HTMLWebpackPlugin({
             // title: "这是一个自定义的title"
             template: './src/index.html',
           }),
         ],

         // 用来设置引用模块
         resolve: {
           extensions: ['.ts', '.js'],
         },
       }
       ```

  4. 根目录下创建 tsconfig.json，配置可以根据自己需要

     - ```json
       {
         "compilerOptions": {
           "target": "ES2015",
           "module": "ES2015",
           "strict": true
         }
       }
       ```

  5. 修改 package.json 添加如下配置

     - ```json
       {
         ...略...
         "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack",
           "start": "webpack serve --open chrome.exe"
         },
         ...略...
       }
       ```

  6. 在 src 下创建 ts 文件，并在并命令行执行`npm run build`对代码进行编译，或者执行`npm start`来启动开发服务器

## Babel 配置

- 经过一系列的配置，使得 TS 和 webpack 已经结合到了一起，除了 webpack，开发中还经常需要结合 babel 来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将 babel 引入到项目中。

  1. 安装依赖包：

     - `npm i -D @babel/core @babel/preset-env babel-loader core-js`
     - 共安装了 4 个包，分别是：
       - @babel/core
         - babel 的核心工具
       - @babel/preset-env
         - babel 的预定义环境
       - @babel-loader
         - babel 在 webpack 中的加载器
       - core-js
         - core-js 用来使老版本的浏览器支持新版 ES 语法

  2. 修改 webpack.config.js 配置文件

     - ```javascript
       ...略...
       module: {
           rules: [
               {
                   test: /\.ts$/,
                   use: [
                       {
                           loader: "babel-loader",
                           options:{
                               presets: [
                                   [
                                       "@babel/preset-env",
                                       {
                                           "targets":{
                                               "chrome": "58",
                                               "ie": "11"
                                           },
                                           "corejs":"3",
                                           "useBuiltIns": "usage"
                                       }
                                   ]
                               ]
                           }
                       },
                       {
                           loader: "ts-loader",

                       }
                   ],
                   exclude: /node_modules/
               }
           ]
       }
       ...略...
       ```

     - 如此一来，使用 ts 编译后的文件将会再次被 babel 处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的 targets 中指定要兼容的浏览器版本。
