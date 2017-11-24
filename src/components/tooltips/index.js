import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Whisper, Tooltip, ButtonToolbar, Button } from 'rsuite';

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
        Tooltip
      }}
      context={context}
      examples={examples}
    />
  );
};