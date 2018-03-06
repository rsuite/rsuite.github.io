import React from 'react';
import ReactQuill from 'react-quill';
import JSONTree from 'react-json-tree';

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
  require('./error-message.md'),
  require('./form-check.md'),
  require('./custom-form-control.md'),
  require('./custom-check-form.md')
];

const JSONView = ({ values, errors }) => (
  <Row>
    <Col md={6}>
      <Panel header="Values" style={{ background: 'rgb(0, 43, 54)' }}>
        <JSONTree data={values} />
      </Panel>
    </Col>

    <Col md={6}>
      <Panel header="Errors" style={{ background: 'rgb(0, 43, 54)' }}>
        <JSONTree data={errors} />
      </Panel>
    </Col>
  </Row>
);

export default () => {
  return (
    <ComponentExample
      dependencies={{
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
        ReactQuill,
        JSONTree,
        JSONView
      }}
      context={context}
      examples={examples}
    />
  );
};
