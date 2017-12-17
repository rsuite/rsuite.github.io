import React from 'react';
import ComponentExample from '../ComponentExample';
import { Navbar, Nav, Button, IconFont } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        IconFont,
        Button,
        Navbar,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
