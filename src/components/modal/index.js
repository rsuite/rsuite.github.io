import React from 'react';
import {
  ButtonToolbar,
  Button,
  Modal,
  Icon,
  Toggle,
  RadioGroup,
  Radio,
  Loader
} from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Modal',
  examples: [
    'basic',
    'backdrop',
    'size',
    'full',
    'overflow',
    'dynamic',
    'confirm'
  ],
  dependencies: {
    Loader,
    ButtonToolbar,
    Button,
    Modal,
    Icon,
    Toggle,
    RadioGroup,
    Radio
  }
});
