# 如何使用

## 安装

首先需要在本地正确安装和配置 Node.js 环境。

```bash
npm install rsuite@next --save
```

如果您在使用 yarn 也可以通过 yarn 安装:

```bash
yarn add rsuite@next
```

## 代码示例

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

## 预览

<iframe src="https://codesandbox.io/embed/mo7jxvr9x9" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## 按需加载

为了避免在生产环境中打包文件过大的问题，在使用 rsuite 的时候按需加载。

```js
import { Button } from 'rsuite';
```

可以改写成：

```js
import Button from 'rsuite/lib/Button';
```

可以使用 babel 插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 处理这个问题。

### 安装 babel-plugin-import

```bash
npm install babel-plugin-import --save-dev
```

### .babelrc 配置

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "rsuite",
        "libraryDirectory": "lib",
        "camel2DashComponentName": false
      }
    ]
  ]
}
```
