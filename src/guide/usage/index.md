# 如何使用

## 安装

首先需要在本地正确安装和配置 Node.js 环境。

### 安装 RSUITE

```bash
npm install rsuite@next --save
```

如果您在使用 yarn 也可以通过 yarn 安装:

```bash
yarn add rsuite@next
```

## 快速开始

以下是一个简单的例子，使用一个默认按钮组件。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rsuite';

// import default style
import 'rsuite/themes/default/index.less';

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### 预览

<iframe src="https://codesandbox.io/embed/mo7jxvr9x9" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
