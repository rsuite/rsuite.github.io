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
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite.css'

function App() {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Preview

<iframe src="https://codesandbox.io/embed/k9v972q3lr" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

- [Use in create-react-app](use-with-create-react-app)
- [Use in Next.js](use-next-app)
