import React from 'react';
import { Form, FormGroup, Button, Checkbox, CheckboxGroup, Icon } from 'rsuite';

import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Checkbox',
  examples: [
    'basic',
    'disabled',
    'indeterminate',
    'checkbox-group',
    'checkbox-groupinline',
    'checkbox-group-controller'
  ],
  dependencies: {
    Form,
    FormGroup,
    Icon,
    Button,
    Checkbox,
    CheckboxGroup
  }
});
