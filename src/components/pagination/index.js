import React from 'react';
import ComponentExample from '../ComponentExample';
import { Pagination, Button, Icon, Toggle } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./advanced.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Toggle,
        Icon,
        Pagination,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
