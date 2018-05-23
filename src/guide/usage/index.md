# 如何使用

## 安装

首先需要在本地正确安装和配置 Node.js 环境。

```bash
$ npm install rsuite --save
```

如果您在使用 yarn 也可以通过 yarn 安装:

```bash
$ yarn add rsuite
```

## 代码示例

以下是一个简单的例子，使用一个默认按钮组件。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rsuite';

// import default style
import 'rsuite/styles/less/index.less';

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## 预览

<iframe src="https://codesandbox.io/embed/k9v972q3lr" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## 按需加载

为了避免在生产环境中打包文件过大的问题，在使用 rsuite 的时候按需加载。

```js
import { Button } from 'rsuite';
```

可以改写成：

```js
import Button from 'rsuite/lib/Button';
```

可以使用 babel preset [babel-preset-rsuite](https://github.com/rsuite/babel-preset-rsuite) 处理这个问题。

### 安装 babel-preset-rsuite

```bash
$ npm install babel-preset-rsuite --save-dev
```

### .babelrc 配置

```json
{
  "presets": ["rsuite"]
}
```

> 注意： 如果在项目中使用了 webpack 的 [Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/), 则不能使用该 preset。
