import React from 'react';
import ComponentExample from '../ComponentExample';
import {
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
  Radio,
  SchemaModel
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
  require('./DefaultForm.md'),
  require('./CustomCheckForm.md')
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
