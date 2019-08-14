# Usage

## Install

You first need to install and configure the `Node.js` environment properly locally.

```bash
$ npm install rsuite --save
```

If you are using yarn you can also install through yarn:

```bash
$ yarn add rsuite
```

## Examples

The following is a simple example of using a default button component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'rsuite';

// import default style
import 'rsuite/styles/less/index.less'; // or 'rsuite/dist/styles/rsuite.min.css'

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Preview

<iframe src="https://codesandbox.io/embed/k9v972q3lr" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Use modularized rsuite

To avoid the problem of packaging files too large in a production environment, load on demand when using rsuite.

```js
import { Button } from 'rsuite';
```

Can be rewritten as:

```js
import Button from 'rsuite/lib/Button';
```

You can use the Babel plug-in [babel-preset-rsuite](https://github.com/rsuite/babel-preset-rsuite) to handle this problem.

### Install babel-preset-rsuite

```bash
$ npm install babel-preset-rsuite --save-dev
```

### .babelrc Configuration

```json
{
  "presets": ["rsuite"]
}
```

Transforms:

```js
import { Button } from 'rsuite';
```

roughly to:

```js
var _Button = require('rsuite/lib/Button');
```

#### With styles

.babelrc

```json
{
  "presets": [["rsuite", { "style": true, "theme": "dark" }]]
}
```

Transforms:

```js
import { Button } from 'rsuite';
```

roughly to:

```js
require('rsuite/lib/Button/styles/themes/dark.less');
var _Button = require('rsuite/lib/Button');
```

> Note: If you use webpack [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) in your project, you cannot use it.
