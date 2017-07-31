## rsuite-theme

> 定制主题

### 概述
本主题基于 [Bootstrap3](https://github.com/twbs/bootstrap) 进行修改。
在统一不同使用场景的视觉和操作体验的同时，我们建立了完整的规范体系，便于创建项目，也方便统一管理。
我们以扁平化和简洁为主旨的设计风格，使用块面来进行布局，用线条来表达各个控件，使功能庞杂的系统 既直观又条理清晰，让使用者一目了然。选用清新的色彩为主基调，使界面清晰又不失沉稳。 主要特点：

- 配置后一键生成主题样式，多种配置方式
- 为主流浏览器提供动效，以大幅提升使用体验
- 支持 ie9+、chrome 、firefox 等各种主流浏览器
- 提供开放的定制需求，包括但不仅限于色系、圆角、边框、阴影和组件的视觉定制。

<image src="http://rsuite.github.io/resources/images/rsuite-preview.png" class="rsuite-theme-preview"/>

**项目地址**

[https://github.com/rsuite/rsuite-theme](https://github.com/rsuite/rsuite-theme)

**样式变量**

`ruiste-theme` 的样式使用 [less](http://less.bootcss.com/) 作为开发语言，并定义了一系列全局 / 组件的样式变量，可以根据需求给相关的变量重新赋值。
- [系统预定义变量][defalut-variables]


### 定制方式
----------

#### 1.引用 less 文件 (**推荐**)
新建一个文件`main.less`。
```less
// 引入组件样式
//@import "~rsuite-picker/lib/less/index";
// 引入ruiste 样式
@import "~rsuite-theme/dist/less/rsuite";
@base-color: #6292f0; //修改主题颜色
//你自己的样式
//...
```
> 引入`rsuite`样式文件后，即可使用所有[系统预定义变量][defalut-variables]。</br>
> 如需引入其他组件样式文件时请 **务必保证**  `rsuite` 样式文件在最后引入，否则可能会造成配色无效。

新建`index.js`文件，并使用`webpack`进行打包。

```javascript
import React from 'react';
import { Header, Navbar } from 'rsuite';
import 'main.less';
import { render } from 'react-dom';

const App = ()=>{
    return (
        <div className="doc-page">
            <Header inverse>
                <div className="container">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><span className="prefix">R</span>Suite</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                </div>
            </Header>

            <div className="container">
                <h1 className="page-header">
                    Hello Word!
                </h1>
                <Home/>
            </div>
        </div>
    )
}
render(App, document.getElementById('root'));
```

新建`index.html`文件，查看效果。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>RSuite</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="//cdn.bootcss.com/babel-standalone/6.15.0/babel.min.js"></script>
    <script src="./index.js"></script>
</head>

<body>
    <div id="root"></div>
</body>

</html>

```

<br><br>

#### 2. cli 工具使用（适用于多套主题的情况）

安装

```bash
npm install rsuite-theme -g
```

使用样例

在项目根目录下新建 `rsuite.config.js`

```javascript
const colors = {
    default: '#00bcd4',
    pagurian: '#1b9451'
};

module.exports = {
    palette: [{
        colors,
        output: 'dist/test/css/'
    }, {
        colors,
        prev: 'loading-',
        output: 'dist/test/css/',
        src: 'css/loading.min.css'
    }],
    resources: {
        paths: [
            'fonts/**/*.*'
        ],
        dist: 'dist/test'
    }
};
```

更多配置详见[配置项](https://github.com/rsuite/rsuite-theme/blob/master/README.md#user-content-配置项)

在项目根目录下运行

```bash
rsuite-theme -I -P
```

帮助

```bash
rsuite-theme -h
```
<br><br>

#### 3. node 模块方式使用（适用于多套主题的情况）
创建文件 `css-build.js`
```javascript

const build = require('rsuite-theme');
const outputDir = 'resources/css';
const themes = {
    default: '#522e9b',
    blue: '#29a7e1',
    purple: '#9c27b0'
};

build.importResources({
    paths: [
        'fonts/**/*.*'
    ],
    dist: outputDir
});

Object.keys(themes).forEach((key) => {
    build.palette({
        baseColor: themes[key],
        src: 'css/rsuite.min.css',
        dist: `${outputDir}/rsuite-${key}.css`
    });
});
```

运行 `node` 脚本

```bash
node css-build.js
```



[defalut-variables]:https://github.com/rsuite/rsuite-theme/blob/master/src/less/variables.less
