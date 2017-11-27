import React from 'react';
import ComponentExample from '../ComponentExample';
import { Table, Button, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./props.md'),
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
