import React from 'react';
import {
  ButtonToolbar,
  Button,
  IconButton,
  Drawer,
  Icon,
  RadioGroup,
  Radio
} from 'rsuite';

import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Drawer',
  examples: ['basic', 'backdrop', 'placement', 'size', 'full'],
  dependencies: {
    ButtonToolbar,
    IconButton,
    Button,
    Drawer,
    Icon,
    RadioGroup,
    Radio
  }
});
