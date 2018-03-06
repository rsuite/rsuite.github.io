import React from 'react';
import ReactQuill from 'react-quill';
import JSONFormatter from 'json-formatter-js';

import ComponentExample from '../ComponentExample';
import 'react-quill/dist/quill.snow.css';
import {
  HelpBlock,
  Form,
  FormGroup,
  FormControl,
  ErrorMessage,
  Dropdown,
  Icon,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ControlLabel,
  CheckboxGroup,
  RadioGroup,
  Col,
  Row,
  Checkbox,
  Radio,
  Schema,
  CheckPicker,
  InputGroup,
  Toggle,
  Panel
} from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./horizontal.md'),
  require('./inline.md'),
  require('./help-block.md'),
  require('./custom-form-control.md'),
  require('./form-check.md'),
  require('./custom-check-form.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        JSONFormatter,
        Row,
        Col,
        Schema,
        HelpBlock,
        Form,
        FormGroup,
        FormControl,
        InputGroup,
        ErrorMessage,
        Dropdown,
        Toggle,
        Icon,
        Button,
        ButtonGroup,
        ButtonToolbar,
        ControlLabel,
        CheckboxGroup,
        CheckPicker,
        RadioGroup,
        Checkbox,
        Panel,
        Radio,
        ReactQuill
      }}
      context={context}
      examples={examples}
    />
  );
};
