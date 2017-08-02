import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./trigger.md')),
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
    />
  );
};