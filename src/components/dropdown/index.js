import React from 'react';
import ComponentExample from '../ComponentExample';
import { Dropdown, Button, IconFont, ButtonToolbar } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./disabled.md'),
  require('./divider.md'),
  require('./select.md'),
  require('./dropup.md'),
  require('./custom.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        IconFont,
        Dropdown,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
