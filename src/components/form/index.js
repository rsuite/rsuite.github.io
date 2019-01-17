import React from 'react';
import Loadable from 'react-loadable';

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
  SelectPicker,
  Slider,
  DatePicker,
  Input
} from 'rsuite';
import createComponentExample from '../createComponentExample';

const JSONTree = Loadable({
  loader: () => import('react-json-tree'),
  loading: () => <div>loading...</div>
});

const MaskedInput = Loadable({
  loader: () => import('react-text-mask'),
  loading: () => <div>loading...</div>
});

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
    'custom-third-party-libraries',
    'custom-check-trigger'
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
    Input,
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
    JSONView,
    MaskedInput,
    Slider,
    DatePicker
  }
});
