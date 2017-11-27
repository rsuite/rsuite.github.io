import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, Toggle } from 'rsuite';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./inner.md'),
  require('./disabled.md')
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

