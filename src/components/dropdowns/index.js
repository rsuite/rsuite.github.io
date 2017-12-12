import React from 'react';
import ComponentExample from '../ComponentExample';
import { Dropdown, Button, IconFont,ButtonToolbar } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./block.md'),
  require('./select.md'),
  require('./noCaret.md'),
  require('./block.md')
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
