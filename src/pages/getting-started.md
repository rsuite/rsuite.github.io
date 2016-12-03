`RSuite` 是一个基于 React.js 开发的 Web 组件库，参考 Bootstrap 设计，提供其中常用组件，支持响应式布局。

我们的目标就是让 WEB 开发更快捷，同时具有一定的灵活性和扩展性。

### 安装

```
npm install rsuite --save
```


### Javascript

```js
// ES2015
const { Button } = require('rsuite');

// CommonJS
var Button = require('rsuite').Button;

// AMD
define(['rsuite'], function(Suite) {
  var Button = Suite.Button;
  ...
});


ReactDOM.render(<Button>Button</Button>, mountNode);
```

### CSS
```html
<link rel="stylesheet" href="//t.hypers.com.cn/libs/rsuite/css/0.1.0/rsuite.min.css">
```
[code](https://github.com/rsuite/rsuite-theme)

### 浏览器支持

针对IE8及以下的浏览器，需要引入 `html5shiv`、`es5-shim`, 来处理对 `HTML5 标签`、`ECMAScript5` 兼容性问题

```html
<!--[if lt IE 9]>
<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
<![endif]-->
```
