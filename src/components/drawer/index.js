import React from 'react';
import ComponentExample from '../ComponentExample';
import { ButtonToolbar, Button, IconButton, Drawer, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./placement.md'),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        IconButton,
        Button,
        Drawer,
        Icon
      }}
      context={context}
      examples={examples}
    />
  );
};
