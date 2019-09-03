# Quick Start ⚡️

Before you start using it, you need to master at least the basics of front-end development and the core concepts of React. If you encounter problems during the learning process, you can discuss them in the developer community.

## Install

### Using npm or yarn

We recommend using npm or yarn to install.First you need to properly install the NPM environment locally and install rsuite via npm.

```bash
$ npm i rsuite --save
```

If you are using yarn you can also install through yarn:

```bash
$ yarn add rsuite
```

### Using CDN

Add `script` and `link` tags in your browser and use the global variable `rsuite`. We provide relevant file in rsuite's npm package. You can also download these files directly from [![cdnjs][cdnjs-badge]][cdnjs-home]、[![jsDelivr][jsdelivr-badge]][jsdelivr-home] or [UNPKG][unpkg-home] .

```
<!-- Import styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rsuite@4.0.0-alpha.6/dist/styles/rsuite-default.min.css">
<!-- Or import dark styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rsuite@4.0.0-alpha.6/dist/styles/rsuite-dark.min.css">
<!-- Import library -->
<script src="https://cdn.jsdelivr.net/npm/rsuite@4.0.0-alpha.6/dist/rsuite.min.js"></script>
```

## Examples

The following is a simple example of using a default button component.

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

## Online example

<iframe src="https://codesandbox.io/embed/k9v972q3lr" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

- [Use in create-react-app](use-with-create-react-app)
- [Use in Next.js](use-next-app)

[cdnjs-badge]: https://img.shields.io/cdnjs/v/rsuite.svg?style=flat-square
[cdnjs-home]: https://cdnjs.com/libraries/rsuite
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/rsuite/badge
[jsdelivr-home]: https://www.jsdelivr.com/package/npm/rsuite
[unpkg-home]: https://unpkg.com/browse/rsuite/dist/
