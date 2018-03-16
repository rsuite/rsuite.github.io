# 如何使用

## 安装

首先需要在本地正确安装和配置 Node.js 环境。

### 安装 RSUITE

```bash
npm install rsuite --save
```

如果你在使用 yarn 也可以通过 yarn 安装:

```bash
yarn add rsuite
```

## 快速开始

以下是一个简单的例子，使用一个默认按钮组件。

### Javascript

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rsuite';

// import default style
import 'rsuite/themes/default/index.less';

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
