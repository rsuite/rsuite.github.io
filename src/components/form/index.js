import React from 'react';
import ComponentExample from '../ComponentExample';
import {
  HelpBlock,
  Form,
  FormGroup,
  FormControl,
  Dropdown,
  IconFont,
  Button,
  ControlLabel,
  CheckboxGroup,
  RadioGroup,
  Col,
  Row,
  Checkbox,
  Radio,
  SchemaModel,
  InputGroup
} from '../../rsuiteSource';

const { createFormControl, Field } = Form;
const {
  StringType,
  NumberType,
  ArrayType,
  DateType,
  ObjectType,
  BooleanType
 } = SchemaModel;

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./horizontal.md'),
  require('./inline.md'),
  require('./help-block.md'),
  require('./input-group.md'),

  require('./schema-model.md'),
  require('./custom-check-form.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        SchemaModel,
        StringType,
        NumberType,
        ArrayType,
        DateType,
        ObjectType,
        BooleanType,
        createFormControl,
        Field,
        HelpBlock,
        Form,
        FormGroup,
        FormControl,
        InputGroup,
        Dropdown,
        IconFont,
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
