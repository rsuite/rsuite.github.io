import React from 'react';
import ComponentExample from '../ComponentExample';
import { Message, Button, ButtonToolbar } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./types.md'),
  require('./description.md'),
  require('./icons.md'),
  require('./close.md'),
  require('./full.md'),
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        ButtonToolbar,
        Button,
        Message
      }}
      examples={examples}
    />
  );
};
