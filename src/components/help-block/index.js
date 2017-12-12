import React from 'react';
import ComponentExample from '../ComponentExample';
import { HelpBlock, Button, IconFont, FormControl } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./shape.md')
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