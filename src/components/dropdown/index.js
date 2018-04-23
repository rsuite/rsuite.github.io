import React from 'react';
import ComponentExample from '../ComponentExample';
import { Dropdown, Button, Icon, ButtonToolbar, IconButton, ButtonGroup } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./trigger.md'),
  require('./active.md'),
  require('./disabled.md'),
  require('./icons.md'),
  require('./divider.md'),
  require('./placement.md'),
  require('./submenu.md'),
  require('./custom.md'),
  require('./buttons.md')
];

export default () => {
  return (
    <ComponentExample
      id="Dropdown"
      dependencies={{
        ButtonToolbar,
        ButtonGroup,
        IconButton,
        Icon,
        Dropdown,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
