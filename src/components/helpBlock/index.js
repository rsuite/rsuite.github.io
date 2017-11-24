import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { HelpBlock, Button, IconFont, FormControl } from 'rsuite';


const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./shape.md'))
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        FormControl,
        Button,
        HelpBlock,
        IconFont
      }}
      context={context}
      examples={examples}
    />
  );
};