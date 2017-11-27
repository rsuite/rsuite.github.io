import React from 'react';
import ComponentExample from '../ComponentExample';
import { Pagination, Button, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./advanced.md')
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
