import React from 'react';
import { Form, FormGroup, RadioGroup, Icon, Button, Radio } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Radio',
  examples: ['basic', 'disabled', 'radio-group', 'radio-group-inline', 'radio-group-controller'],
  dependencies: {
    Form,
    FormGroup,
    RadioGroup,
    Icon,
    Button,
    Radio
  }
});
