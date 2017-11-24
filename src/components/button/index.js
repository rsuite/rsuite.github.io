import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Button, ButtonToolbar, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./size.md')),
  splitDocs(require('./shape.md')),
  splitDocs(require('./block.md')),
  splitDocs(require('./disabled.md'))
];


export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        ButtonToolbar,
        Button,
        IconFont
      }}
    />
  );
};
