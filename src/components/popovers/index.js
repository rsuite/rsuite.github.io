import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { ButtonToolbar, Button, Whisper, Popover } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./trigger.md')),
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        Whisper,
        Popover
      }}
      context={context}
      examples={examples}
    />
  );
};