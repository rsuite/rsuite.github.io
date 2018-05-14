import React from 'react';
import JSONTree from 'react-json-tree';

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
  Alert,
  SelectPicker
} from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

const JSONView = ({ formValue, formError }) => (
  <Row style={{ marginBottom: 10 }}>
    <Col md={12}>
      <Panel className="json-tree-wrapper" header={<p>formValue</p>}>
        <JSONTree data={formValue} />
      </Panel>
    </Col>

    <Col md={12}>
      <Panel className="json-tree-wrapper" header={<p>formError</p>}>
        <JSONTree data={formError} />
      </Panel>
    </Col>
  </Row>
);

export default createComponentExample({
  id: 'Form',
  examples: [
    'basic',
    'fluid',
    'horizontal',
    'inline',
    'modal-layout',
    'help-block',
    'error-message',
    'form-check',
    'custom-form-control',
    'custom-check-form'
  ],
  dependencies: {
    Alert,
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
    JSONTree,
    JSONView
  }
});
