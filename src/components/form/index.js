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
  Radio
 } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./horizontal.md'),
  require('./inline.md'),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
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
