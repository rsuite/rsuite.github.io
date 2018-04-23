import React from 'react';
import ComponentExample from '../ComponentExample';
import {
  ButtonToolbar,
  Button,
  IconButton,
  Toggle,
  Drawer,
  Icon,
  RadioGroup,
  Radio
} from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./backdrop.md'),
  require('./placement.md'),
  require('./size.md'),
  require('./full.md')
];

export default () => {
  return (
    <ComponentExample
      id="Drawer"
      dependencies={{
        Toggle,
        ButtonToolbar,
        IconButton,
        Button,
        Drawer,
        Icon,
        RadioGroup,
        Radio
      }}
      context={context}
      examples={examples}
    />
  );
};
