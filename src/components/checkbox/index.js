import React from 'react';
import ComponentExample from '../ComponentExample';
import { Form, FormGroup, CheckboxGroup, Button, Checkbox, IconFont } from 'rsuite';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./checkboxList.md'),
  require('./checkboxListInline.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Form,
        FormGroup,
        CheckboxGroup,
        IconFont,
        Button,
        Checkbox
      }}
      context={context}
      examples={examples}
    />
  );
};
