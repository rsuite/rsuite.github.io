import React from 'react';
import ComponentExample from '../ComponentExample';
import { Form, FormGroup, Button, Checkbox, CheckboxGroup, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./disabled.md'),
  require('./indeterminate.md'),
  require('./checkbox-group.md'),
  require('./checkbox-groupinline.md'),
  require('./checkbox-group-controller.md')
];

export default () => {
  return (
    <ComponentExample
      id="Checkbox"
      dependencies={{
        Form,
        FormGroup,
        Icon,
        Button,
        Checkbox,
        CheckboxGroup
      }}
      context={context}
      examples={examples}
    />
  );
};
