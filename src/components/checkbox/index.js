import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Form, FormGroup, CheckboxGroup, Button, Checkbox, IconFont } from 'rsuite';


const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./checkboxList.md')),
  splitDocs(require('./checkboxListInline.md')),
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
