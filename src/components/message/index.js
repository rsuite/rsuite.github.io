import React from 'react';
import ComponentExample from '../ComponentExample';
import { Message, Button, ButtonToolbar } from '../../rsuiteSource';
import Paragraph from '../../fixtures/Paragraph';


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
        Paragraph,
        ButtonToolbar,
        Button,
        Message
      }}
      examples={examples}
    />
  );
};
