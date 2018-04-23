import React from 'react';
import JSONTree from 'react-json-tree';

import ComponentExample from '../ComponentExample';

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

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./fluid.md'),
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

export default () => {
  return (
    <ComponentExample
      id="Form"
      dependencies={{
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
      }}
      context={context}
      examples={examples}
    />
  );
};
