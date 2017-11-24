import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import {
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
} from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./horizontal.md')),
  splitDocs(require('./inline.md')),
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

