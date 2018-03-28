import React from 'react';
import ComponentExample from '../ComponentExample';
import { Navbar, Nav, Button, Icon, Dropdown } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./appearance.md')];

export default () => {
  return (
    <ComponentExample
      id="Navbar"
      dependencies={{
        Dropdown,
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
