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
  InputNumber,
  Toggle,
  Panel,
  Modal,
  SelectPicker
} from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./horizontal.md'),
  require('./inline.md'),
  require('./modal-layout.md'),
  require('./help-block.md'),
  require('./error-message.md'),
  require('./form-check.md'),
  require('./custom-form-control.md'),
  require('./custom-check-form.md')
];

const JSONView = ({ formValue, formError }) => (
  <Row>
    <Col md={12}>
      <Panel header="formValue" style={{ background: 'rgb(0, 43, 54)' }}>
        <JSONTree data={formValue} />
      </Panel>
    </Col>

    <Col md={12}>
      <Panel header="formError" style={{ background: 'rgb(0, 43, 54)' }}>
        <JSONTree data={formError} />
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
        InputNumber,
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
        SelectPicker,
        RadioGroup,
        Checkbox,
        Panel,
        Radio,
        Modal,
        ReactQuill,
        JSONTree,
        JSONView
      }}
      context={context}
      examples={examples}
    />
  );
};
