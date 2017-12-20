import React from 'react';
import ComponentExample from '../ComponentExample';
import { Nav, Button, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./pills.md'),
  require('./tabs.md'),
  require('./stacked.md'),
  require('./justified.md'),
  require('./dropdown.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Icon,
        Button,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
