import React, { useState } from 'react';
import Loadable from 'react-loadable';
import dateFns from 'date-fns';
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
  DateRangePicker,
  Input,
  TagPicker,
  InputPicker,
  Cascader,
  MultiCascader
} from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';
import pickerData from '@/resources/data/users';
import { getProvince } from '@/resources/data';

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
    'read-only',
    'form-check-default',
    'form-check',
    'form-check-async',
    'custom-form-control',
    'custom-third-party-libraries',
    'custom-check-trigger'
  ],
  getDependencies: getProvince,
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
    DatePicker,
    DateRangePicker,
    TagPicker,
    dateFns,
    InputPicker,
    useState,
    pickerData,
    Cascader,
    MultiCascader
  }
});
