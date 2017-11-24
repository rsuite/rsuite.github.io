import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Pagination, Button, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./advanced.md'))
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        IconFont,
        Pagination,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
