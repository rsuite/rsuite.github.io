# 定制主题

## 引入 less

新建一个单独的 `less` 文件如下，再引入这个文件。

```less
@import '~rsuite/styles/less/index.less'; //引入默认的样式文件
@import 'custom-theme.less'; // 进行样式定制
```

如果使用 [webpack](http://webpack.github.io/) 构建项目，需要配置 [less-loader](https://github.com/webpack-contrib/less-loader) 。

## 进行定制

rsuite 的样式使用了 [Less][less] 作为开发语言，并且定义了一系列的变量，可使用 [Modify Variables][modify variables] 的方式进行定制化。包括但不限定于[定制主题色](#定制主题色)、[调整组件圆角半径](#调整组件圆角半径)、[修改字体样式](#修改字体样式)、[替换辅助色](#替换辅助色)等。下面示例中的代码均为在`custom-theme.less`进行新增操作。

### 定制主题色

设置主题基色。

```less
@base-color: #00bcd4;
```

配置主题基色以后，会生成一组色板（`@H050` - `@H900`， H 是 Hue 的缩写 ）参考: [constants.less][rsuite-theme-pallete]。现在就去[调色板](/tools/palette)选择适合的颜色或上传自己的 Logo 进行预览。

### 调整组件圆角半径

```less
@border-radius-base: 2px;
```

### 修改字体样式

```less
@font-family-base: 'Lucida Grande', 'Avenir Next', 'Helvetica Neue', Helvetica,
  Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', STXihei,
  sans-serif;
@font-size-base: 14px;
```

### 替换辅助色

信息，成功，警告，错误分别对应的颜色，修改后影响到 [Message](../components/message)，[Notification](../components/notification) 等需要显示状态的组件。

```less
@info-color: #2196f3;
@info-light-color: #e9f5fe;

@success-color: #4caf50;
@success-light-color: #edfae1;

@warning-color: #ffb300;
@warning-light-color: #fff9e6;

@error-color: #f44336;
@error-light-color: #fde9ef;
```

### 禁用涟漪动画

```less
@button-ripple: false;
```

## 更多自定义配置

我们提供了丰富变量，如果依然不能满足您的定制需求，欢迎给我们提 [issue][issue]。

> 详见: [variables.less][variables.less]。

## 常见问题

<a id="note"></a>

### 如何在本地配置字体文件？

RSUITE 中使用的图标字体文件都部署在 [jsDelivr CDN](http://cdn.jsdelivr.net/npm/rsuite-icon-font@3.0.0/fonts/)， 如果您希望本地部署，则需要修改图标字体的路径：

```less
@icon-font-path: './fonts';
```

另外，您还需要在 webpack 中配置 `url-loader` 来加载图标字体文件，webpack 4 配置示例：

```js
{
  test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 1,
        size: 16,
        hash: 'sha512',
        digest: 'hex',
        name: '[hash].[ext]',
        publicPath: '/'
      }
    }
  ]
}
```

### 如何全局修改组件的 className 前缀，`rs-` ？

首先，在你的 `less` 文件中定义 `@ns` 来覆盖默认配置。

```less
@ns: custom-;
```

然后, 再通过 webpack 注入常量 `__RSUITE_CLASSNAME_PREFIX__` , 所有组件的 className 前缀会通过注入的常量覆盖默认的 `rs-`

```js
plugins: [
  //...
  new webpack.DefinePlugin({
    __RSUITE_CLASSNAME_PREFIX__: JSON.stringify('custom-')
  })
];
```

> 如果你使用了 [`create-react-app`][cra] 创建项目，可以通过 [`react-app-rewire-less`][rarl] 和 [`react-app-rewire-define-plugin`][rardp] 进行修改。

[cra]: https://github.com/facebook/create-react-app
[rarl]: https://www.npmjs.com/package/react-app-rewire-less
[rardp]: https://www.npmjs.com/package/react-app-rewire-define-plugin
[less]: http://lesscss.org/
[modify variables]: http://lesscss.org/usage/#using-less-in-the-browser-modify-variables
[rsuite-theme-pallete]: https://github.com/rsuite/rsuite/blob/master/styles/less/constants.less#L32
[issue]: https://github.com/rsuite/rsuite/issues/new
[variables.less]: https://github.com/rsuite/rsuite/blob/master/styles/less/variables.less
