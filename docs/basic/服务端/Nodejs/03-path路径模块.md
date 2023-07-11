# path 路径模块

- a. 导入：`const path = require('path")`

- b. 基本方法

  - ⅰ. `path.join()` 路径拼接，(特殊用法： `../` 会抵消一层路径)

    ```
    const pathStr = path.join('/a', '/b/c', '../", './d', 'e')
    console.1og(pathStr) // 输出\a\b\d\e

    const pathStr2 = path.join(_dirname, './files/1.txt')
    console.log(pathStr2) // 输出前文件所处目录\files\1.txt
    ```

  - ⅱ. `path.basename()` 获取路径中的最后一部分，通常用来获取路径中的文件名。

    ```
    const fpath = '/a/b/c/index.html' // 文件的存放路径
    var fullName = path.basename(fpath)
    console.log(fullName) //输出 index.html
    var namewithoutExt = path.basename(fpath,'.html')
    console.log(namewithoutExt) // 输出 index

    ```

  - ⅲ. `path.extname()` 获取路径中的扩展名部分。

    ```
    const fpath = '/a/b/cfindex.html' // 路径字符串
    const fext = path.extname(fpath)
    console.log(fext) // 输出.html
    ```

- c. 综合案例 -- 时钟案例

  - ⅰ. 实现步骤

        ① 创建两个正则表达式,分别用来匹配`<style>`和`<script>`标签
        ② 使用 fs 模块，读取需要被处理的 HTML 文件
        ③ 自定义 resolveCSS 方法,来写入 index.css 样式文件
        ④ 自定义 resolveJS 方法,来写入 index.js 脚本文件
        ⑤ 自定义 resolveHTML 方法,来写入 index.html 文件

  - ⅱ. 特殊知识点

    1. `reg.exec()` 使用正则提取需要的内容（reg 是正则，参数为要从哪里提取）。例如：`const r1 = regStyle.exec(htm1str)`
    2. 在提取 html 内容时，要将内联标签替换为外联标签。

    ```
    // 1 定义处理 HIML 结构的方法
    function resolveHTML(htmlStr) {

        // 2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
        const newHITML = htmlstr.replace(regstyle,'<link rel="stylesheet" href="./index.ss" />').replace(regScript, '<script src="./index.js"></script>')

    // 3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML,function(err)(
        if (err) return console.log('写入 HTML 文件失败!' + err.message)
        console.log('写入 HTML 页面成功!')
    })
    ```
