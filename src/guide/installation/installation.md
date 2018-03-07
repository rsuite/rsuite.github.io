# 安装

首先需要在本地正确安装和配置 Node.js 环境。

## 安装 RSUITE

```bash
npm install rsuite --save
```

如果你在使用 yarn 也可以通过 yarn 安装:

```bash
yarn add rsuite
```

## webpack 注意事项

* rsuite 中的样式，是通过 less 写的， 需要在 webpack 中配置 less-loader , css-loader 与 style-loader。
* `<Icon>` 组件中用到了一些字体图标，需要加载字体资源，需要在 webpack 中配置 url-loader。

可以参考 [rsuite-example-admin](https://github.com/rsuite/rsuite-example-admin/blob/next/webpack.config.js)

## 下一步

[如何使用](./usage)
