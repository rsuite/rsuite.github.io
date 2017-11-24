import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Form, FormGroup, Dropdown, InputGroup, IconFont, Button, FormControl } from 'rsuite';


const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./icon.md')),
  splitDocs(require('./custom.md')),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Form,
        FormGroup,
        FormControl,
        InputGroup,
        Dropdown,
        IconFont,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
