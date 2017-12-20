import React from 'react';
import ComponentExample from '../ComponentExample';
import { Pagination, Button, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./advanced.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Icon,
        Pagination,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
