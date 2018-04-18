# 定制主题

## 引入 less

在 less 中引入 rsuite 默认样式

```less
@import '~rsuite/styles/less/index.less';
```

如果你使用 [webpack](http://webpack.github.io/) 构建项目，需要配置 [less-loader](https://github.com/webpack-contrib/less-loader) 。

## 定制主题色

设置主题基色

```less
@base-color: #00bcd4;
```

配置主题基色以后，会生成一组色板（@H050 - @H900， H 是 Hue 的缩写 ）参考: [commonly-variables](https://github.com/rsuite/rsuite/blob/next/styles/less/commonly-variables.less)。

在配置前可以[调色板](/tools/palette)中预览颜色，选择 @H500 作为主题基色。

## 字体样式设置

```less
@font-family-base: 'Lucida Grande', 'Avenir Next', 'Helvetica Neue', Helvetica, Arial,
  'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', STXihei, sans-serif;
@font-size-base: 14px;
```

## 辅助色设置

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

## 更多自定义配置

> 参考: [variables](https://github.com/rsuite/rsuite/blob/next/styles/less/variables.less)

## 注意

<a id="note"></a>

### 本地部署字体文件

RSUITE 中使用的图标字体文件都是部署在 cdnjs， 如果您希望本地部署，则需要在 less 中覆盖图标字体的路径：

```
@import '~rsuite/styles/less/index.less';
@icon-font-path: "./fonts";
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
