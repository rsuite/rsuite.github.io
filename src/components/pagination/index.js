import React from 'react';
import ComponentExample from '../ComponentExample';
import { Pagination, Button, Icon, Toggle, Divider } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./size.md'), require('./advanced.md')];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Toggle,
        Icon,
        Pagination,
        Button,
        Divider
      }}
      context={context}
      examples={examples}
    />
  );
};
