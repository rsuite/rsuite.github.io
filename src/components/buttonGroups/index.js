
import React from 'react';
import { ButtonGroup, ButtonToolbar, Button } from 'rsuite';
import ComponentExample from '../ComponentExample';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./toolbar.md'),
  require('./vertical.md'),
  require('./block.md'),
  require('./justified.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Button,
        ButtonGroup,
        ButtonToolbar
      }}
      context={context}
      examples={examples}
    />
  );
};
