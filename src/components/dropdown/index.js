import React from 'react';
import ComponentExample from '../ComponentExample';
import { Dropdown, Button, Icon, ButtonToolbar, IconButton } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./disabled.md'),
  require('./divider.md'),
  require('./placement.md'),
  require('./custom.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
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
