# npm 包管理工具

## 包 -- 简介

- a. 含义：Nodejs 中第三方模块就叫做包。免费且开源。
- b. 意义：Nodejs 内置模块只提供了底层 API，开发效率低。
- c. npm 包搜索途径：https://www.npmjs.com/
- d. npm 包下载途径：http://registry.npmjs.org/

## npm 初体验

### a. 格式化时间案例

- ⅰ. 步骤（2022 年用 day.js 替代 moment）
  - 使用 npm 包管理工具,在项目中安装格式化时间的包 moment
  - 使用 require() 导入格式化时间的包
  - 参考 moment 官方 API 文档对时间进行格式化
- ⅱ. 代码

```
// 1. 导入 monent 包
const moment = reqaire('moment')
// 2. 参考 moment 官方 API
const dt = moment().fomat('YYY-MM-DD HH:mm:ss')
console.log(dt)

```

- ⅲ 在项目中安装包

```
npm install 包名
npm i 包名
npm i 包名@版本号
```

### b. 下载包的同时自动创建了两个文件

- ⅰ. `node_modules` 文件夹：存放下载的所有第三方包
- ⅱ. `package-lock.json` 配置文件：记录 `node_modules` 目录下每个包的下载信息，如包名、版本号、下载地址等。
- ⅲ. 注：这两个文件不需要手动修改，npm 会自动维护。

### c. `package.json` 包管理配置文件

- ⅰ. 含义：放在项目的根目录中，记录与项目有关的配置信息。
- ⅱ. 多人协作：在上传 git 时，要剔除 `node_modules` 文件夹（过大），同时在 `package.json` 中记录都用了哪些包。所以在实际项目开发中，一定要把 `node_modules` 文件夹添加到`.gitignore` 忽略文件中。
- ⅲ. 快速创建：

```
npm init -y                # 注意：目录必须英文且无空格
```

- ⅳ. `dependencies` 节点：记录 npm 装了哪些包（项目开发和上线都用）。
- ⅴ. 为拉取到的项目一次性安装包：

```
npm i
```

- ⅵ. 卸载包：

```
npm uninstall 包名
```

- ⅶ. `devDependencies` 节点
  - 含义：记录只在项目开发阶段用，但项目上线后不用的包。
  - 安装包到该节点下：
  ```
  npm i 包名 -D
  ```

### d. 解决问题 -- 包下载慢

- ⅰ. 淘宝 npm 镜像服务器
- ⅱ. 切换 npm 的下包镜像源
  - 方法一
  ```
  npm config set registry=http://registry.npm.taobao.org/
  ```
  - 方法二：nrm 工具
  ```
  # 通过 npm包含理器,将nrm安装为全局可用的工具
  npm i nrm -g
  # 查看所有可用的镜像源
  nrm ls
  # 将下包的镜像源切换为 taobao 镜像
  nrm use taobao
  ```

### e. 包的分类

- ⅰ. 项目包
  - 1. 开发依赖包：被记录到 `devDenpendencies` 节点
  - 2. 核心依赖包：被记录到 `denpendencies` 节点
- ⅱ. 全局包
  - 1. 含义：安装时提供了`-g` 参数。只有工具性质的包才需要全局安装，每个包如何安装，官方都会提供 install 说明。
  - 2. 例子
       - a. nrm：切换下包镜像
       - b. i5ting_toc：把 md 文档转为 html 页面

### f. 发布包

- ⅰ. 新建三个文件
  - 1. `package.json`
  - 2. `index.js`（用来写这个包主要提供的功能，如转义 HTML）
  - 3. `REANME.md` 说明文档
- ⅱ. 模块化拆分：将上面 `index.js` 中写的多个功能进行拆分，然后在 `index.js` 中导入若干模块，再用 `module.exports` 把这些功能的方法共享出去。
- ⅲ. 发布到 npm
  - 1. 注册 npm 账号
  - 2. 在终端登录 npm 账号：`npm login`（在运行之前，必须把下包服务器切换为官方的 nrm use npm）
  - 3. 将终端切换到包的根目录，运行 `npm publish` 命令。
  - 4. 删除已发布的包：`npm unpublish 包名 --force`（只能删除 72 小时内发布的包，且在 24 小时不能重新发布）
