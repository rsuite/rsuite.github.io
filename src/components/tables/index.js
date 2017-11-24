import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Table, Button, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./props.md')),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        IconFont,
        Table,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
