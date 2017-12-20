import React from 'react';
import ComponentExample from '../ComponentExample';
import { Navbar, Nav, Button, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Icon,
        Button,
        Navbar,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
