# 定制主题

## 引入 less

在 less 中引入 rsuite 默认样式

```less
@import '~rsuite/lib/less/index.less';
```

如果你使用 [webpack](http://webpack.github.io/) 构建项目，需要配置 [less-loader](https://github.com/webpack-contrib/less-loader) 。


## 定制主题色

设置主题基色

```less
@base-color: #00bcd4;
```

配置主题基色以后，会生成一组色板（@H050 - @H900， H 是 Hue 的缩写 ）参考: [commonly-variables](https://github.com/rsuite/rsuite-theme/blob/next/src/less/commonly-variables.less)。

在配置前可以[调色板](/tools/palette)中预览颜色，选择 @H500 作为主题基色。

## 字体样式设置

```less
@font-family-base: "Lucida Grande", "Avenir Next", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", STXihei, sans-serif;
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

> 参考: [variables](https://github.com/rsuite/rsuite-theme/blob/next/src/less/variables.less)
