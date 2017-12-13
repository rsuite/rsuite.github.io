import React from 'react';
import ComponentExample from '../ComponentExample';
import { Form, FormGroup, Button, Checkbox, CheckboxGroup, IconFont } from '../../rsuiteSource';


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
        IconFont,
        Button,
        Checkbox,
        CheckboxGroup
      }}
      context={context}
      examples={examples}
    />
  );
};
