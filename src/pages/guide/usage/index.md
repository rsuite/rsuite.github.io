# 快速开始 ⚡️

在开始之前，您至少需要掌握前端开发基础知识以及 React 的核心概念，如果在学习过程中遇到问题，可以在开发者社区与大家讨论。

## 安装

### 使用 npm 或 yarn 安装

推荐使用 npm 或 yarn 的方式安装。首先需要在本地正确安装 NPM 环境，通过 npm 安装 rsuite。

```bash
$ npm i rsuite --save
```

如果您在使用 yarn 也可以通过 yarn 安装:

```bash
$ yarn add rsuite
```

### CDN 引用

您也可以在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `rsuite`。我们在 npm 发布包内 `rsiute/dist` 目录提供了相关的文件。您也可以通过 [![cdnjs][cdnjs-badge]][cdnjs-home]、[![jsDelivr][jsdelivr-badge]][jsdelivr-home] 或 [UNPKG][unpkg-home] 进行下载。

```
<!-- 引入默认样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rsuite@4.0.0-alpha.6/dist/styles/rsuite-dark.min.css">
<!-- 引入 Dark 主题样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rsuite@4.0.0-alpha.6/dist/styles/rsuite-default.min.css">
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/rsuite@4.0.0-alpha.6/dist/rsuite.min.js"></script>
```

## 代码示例

以下是一个简单的例子，使用一个默认按钮组件。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rsuite';

// import default style
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite.css'

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## 在线示例

<iframe src="https://codesandbox.io/embed/k9v972q3lr" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

- [在 create-react-app 中使用](use-with-create-react-app)
- [在 Next.js 中使用](use-next-app)

[cdnjs-badge]: https://img.shields.io/cdnjs/v/rsuite.svg?style=flat-square
[cdnjs-home]: https://cdnjs.com/libraries/rsuite
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/rsuite/badge
[jsdelivr-home]: https://www.jsdelivr.com/package/npm/rsuite
[unpkg-home]: https://unpkg.com/browse/rsuite/dist/
