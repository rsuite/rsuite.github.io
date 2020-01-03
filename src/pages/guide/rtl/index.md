# Right-to-left

为支持阿拉伯语和希伯来语等语言的习惯，对从右到左（RTL）读取的语言的 UI。

## 使用步骤

### 1.HTML 设置

确保在 body 上设置了 dir 属性：

```html
<body dir="rtl"></body>
```

### 2.配置 IntlProvider

在 IntlProvider 组件上设置 rtl 属性，配置所有组件支持 RTL。

```jsx
function RTL(props) {
  return <IntlProvider rtl>{props.children}</IntlProvider>;
}
```

### 3.CSS 后处理

CSS 的后处理我们推荐两种方式，您可以根据自己开发环境的情况，任选其中一种。

**方式 1：RTLCSS 框架**

使用 `rtlcss` 可以为 RTL 属性规则生成独立的 CSS 文件。 详细的使用方式参考: https://rtlcss.com/learn/

**方式 2：PostCSS-RTL 插件**

如果在您的开发环境中使用了 `postcss`, 就可以通过 `postcss-rtl` 生成具有翻转属性的 RTL 规则，它会让两个规则生成在同一个文件中。

```
npm i postcss
npm i postcss-rtl
```

配置 `postcss.config.js`

```js
module.exports = {
  plugins: function() {
    return [require('postcss-rtl')(options)];
  }
};
```

关于 `postcss-rtl` 详细的使用说明，请前往[插件 README](https://github.com/vkalinichev/postcss-rtl)
