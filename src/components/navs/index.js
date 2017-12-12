import React from 'react';
import ComponentExample from '../ComponentExample';
import { Nav, Button, IconFont } from '../../rsuiteSource';

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
        IconFont,
        Button,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
