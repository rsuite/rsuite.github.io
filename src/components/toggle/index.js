import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Button, Toggle } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./size.md')),
  splitDocs(require('./inner.md')),
  splitDocs(require('./disabled.md'))
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Toggle,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};

