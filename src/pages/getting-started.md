`RSuite` 是通过 npm 管理，需要通过 npm 进行安装。
关于组件的使用，可以参考组件的详细说明。

如果你想参考一个完整的 Demo ,我们也提供一些[案例](https://github.com/rsuite/rsuite/tree/master/examples/)。

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
