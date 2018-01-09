import React from 'react';
import ComponentExample from '../ComponentExample';
import { NavMenu, Nav, Button, Icon } from '../../rsuiteSource';

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
        NavMenu,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
