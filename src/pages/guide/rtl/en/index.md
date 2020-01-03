# Right-to-left

In order to support the habits of languages ​​such as Arabic and Hebrew, the UI of the language read from right to left (RTL).

## Steps

### 1.HTML

Make sure the `dir` attribute is set on the body:

```html
<body dir="rtl"></body>
```

### 2.IntlProvider

Set the `rtl` props on the IntlProvider component to configure all components to support RTL.

```jsx
function RTL(props) {
  return <IntlProvider rtl>{props.children}</IntlProvider>;
}
```

### 3.Post-Processing CSS

We recommend two methods for CSS post-processing, you can choose one of them according to the situation of your development environment.

- **Method 1: RTLCSS framework**

Use `rtlcss` to generate separate CSS files for RTL attribute rules. Detailed usage reference: https://rtlcss.com/learn/

- **Method 2: PostCSS-RTL plugin**

If you use postcss in your development environment, you can use postcss-rtl to generate RTL rules with rollover properties. Use one file for both directions.

```bash
npm i postcss
npm i postcss-rtl
```

Configure `postcss.config.js`

```js
module.exports = {
  plugins: function() {
    return [require('postcss-rtl')(options)];
  }
};
```

Head to the [plugin README](https://github.com/vkalinichev/postcss-rtl) to learn more about it.
