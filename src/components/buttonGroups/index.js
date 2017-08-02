
import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./size.md')),
  splitDocs(require('./toolbar.md')),
  splitDocs(require('./vertical.md')),
  splitDocs(require('./block.md')),
  splitDocs(require('./justified.md'))
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
    />
  );
};
