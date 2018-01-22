import React from 'react';
import ComponentExample from '../ComponentExample';
import {
  HelpBlock,
  Form,
  FormGroup,
  FormControl,
  Dropdown,
  Icon,
  Button,
  ControlLabel,
  CheckboxGroup,
  RadioGroup,
  Col,
  Row,
  Checkbox,
  Radio,
  Schema,
  InputGroup
} from '../../rsuiteSource';

console.log(Schema);

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./horizontal.md'),
  require('./inline.md'),
  require('./form-check.md'),
  require('./custom-form-control.md'),
  /*


  require('./inline.md'),
  require('./help-block.md'),
  require('./input-group.md'),

  require('./schema-model.md'),
  require('./custom-check-form.md')
  */
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Schema,
        HelpBlock,
        Form,
        FormGroup,
        FormControl,
        InputGroup,
        Dropdown,
        Icon,
        Button,
        ControlLabel,
        CheckboxGroup,
        RadioGroup,
        Col,
        Row,
        Checkbox,
        Radio
      }}
      context={context}
      examples={examples}
    />
  );
};
