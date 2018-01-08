import React from 'react';
import ComponentExample from '../ComponentExample';
import { Nav, Button, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./appearance.md'),
  require('./active.md'),
  require('./disabled.md'),
  require('./vertical.md'),
  require('./reversed.md'),
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
