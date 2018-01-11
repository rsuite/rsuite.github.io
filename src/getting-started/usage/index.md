# 如何使用


## 快速开始

以下是一个简单的例子，使用一个默认按钮组件。

```js

import React from 'react';
import { render } from 'react-dom';
import { Button } from 'rsuite';

import 'rsuite-theme/dist/less/rsuite'

function App() {
  return (
    <Button>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

