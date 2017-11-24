import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Navbar, Nav, Button, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./toggle.md'))
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
