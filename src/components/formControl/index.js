import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Form, Button, FormControl, FormGroup, ControlLabel, IconFont, HelpBlock } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Form,
        Button,
        IconFont,
        FormControl,
        HelpBlock,
        ControlLabel,
        FormGroup
      }}
      context={context}
      examples={examples}
    />
  );
};
