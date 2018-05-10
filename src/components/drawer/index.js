import React from 'react';
import {
  ButtonToolbar,
  Button,
  IconButton,
  Toggle,
  Drawer,
  Icon,
  RadioGroup,
  Radio
} from '../../rsuiteSource';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Drawer',
  examples: ['basic', 'backdrop', 'placement', 'size', 'full'],
  dependencies: {
    Toggle,
    ButtonToolbar,
    IconButton,
    Button,
    Drawer,
    Icon,
    RadioGroup,
    Radio
  }
});
