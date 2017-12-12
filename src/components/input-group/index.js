import React from 'react';
import ComponentExample from '../ComponentExample';
import { Form, FormGroup, Dropdown, InputGroup, IconFont, Button, FormControl } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./icon.md'),
  require('./custom.md'),
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
