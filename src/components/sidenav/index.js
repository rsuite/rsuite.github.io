import React from 'react';
import ComponentExample from '../ComponentExample';
import { Sidenav, Nav, Button, Icon, Toggle, Dropdown } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./appearance.md'),
  require('./toggle.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Icon,
        Button,
        Sidenav,
        Dropdown,
        Toggle,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
