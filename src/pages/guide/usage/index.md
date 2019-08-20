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
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite.css'

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## 预览

<iframe src="https://codesandbox.io/embed/k9v972q3lr" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

- [在 create-react-app 中使用](use-with-create-react-app)
- [在 Next.js 中使用](use-next-app)
