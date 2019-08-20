# 定制主题

## 引入 less

新建一个单独的 `less` 文件如下，再引入这个文件。

```less
@import '~rsuite/lib/styles/index.less'; //引入默认的样式文件
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

### 更多自定义配置

我们提供了[各种场景的变量][variables.less]，如果依然不能满足您的定制需求，欢迎给我们提 [issue][issue]。

## Webpack 编译多主题方案

React Suite 提供了一个 Webpack 辅助工具 [webpack-multiple-themes-compile][webpack-multiple-themes-compile]，
可以在项目编译时候根据配置生成多套 CSS 文件，然后在不同的主题环境引入不同的 CSS 文件，实现多主题切换效果。实现的原理是基于 Less 的变量替换方式，所以必须要依赖于 Less 编译，我们通过以下一个示例进行说明。

- **首先**，我们看一下默认情况下通过 Webpack 把 Less 编译成 CSS 的配置如下:

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin(`style.[hash].css`);

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: extractLess.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'less-loader?javascriptEnabled=true' }
          ]
        })
      }
    ]
  }
  // ...其他配置
};
```

- **然后**，将 Less 文件交由 `webpack-multiple-themes-compile` 处理，配置 `themesConfig` 参数定义主题下需要的变量。

```js
const merge = require('webpack-merge');
const multipleThemesCompile = require('webpack-multiple-themes-compile');

const webpackConfigs = {
  // There is another options.
};

module.exports = merge(
  webpackConfigs,
  multipleThemesCompile({
    themesConfig: {
      default: {},
      green: {
        'base-color': '#008000'
      },
      yellow: {
        'base-color': '#ffff00'
      }
    }
  })
);
```

- **最后**，在运行 Webpack 命令以后，就会生成多套 CSS，根据自己的业务要求，在不同的主题环境下引入对应的 CSS，就实现了多主题切换。具体详细的实现可以参考示例项目 [multiple-themes][multiple-themes]

```
├── theme-default.css
├── theme-green.css
└── theme-yellow.css
```

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

首先，在您的 `less` 文件中定义 `@ns` 来覆盖默认配置。

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

如果是通过服务端渲染，在 `server.js` 添加如下代码 :

```js
global.__RSUITE_CLASSNAME_PREFIX__ = 'custom-';
```

> 如果您使用了 [`create-react-app`][cra] 创建项目，可以通过 [`react-app-rewire-less`][rarl] 和 [`react-app-rewire-define-plugin`][rardp] 进行修改。详见[在 create-react-app 中使用][use-with-create-app]。

### 如何使用 webpack 编译多套 css 主题？

[cra]: https://github.com/facebook/create-react-app
[rarl]: https://www.npmjs.com/package/react-app-rewire-less
[rardp]: https://www.npmjs.com/package/react-app-rewire-define-plugin
[less]: http://lesscss.org/
[modify variables]: http://lesscss.org/usage/#using-less-in-the-browser-modify-variables
[rsuite-theme-pallete]: https://github.com/rsuite/rsuite/blob/master/styles/less/constants.less#L32
[issue]: https://github.com/rsuite/rsuite/issues/new
[variables.less]: https://github.com/rsuite/rsuite/blob/master/styles/variables.less
[use-with-create-app]: /guide/use-with-create-react-app#定制主题
[webpack-multiple-themes-compile]: https://github.com/rsuite/webpack-multiple-themes-compile
[multiple-themes]: https://github.com/rsuite/examples/tree/master/multiple-themes
