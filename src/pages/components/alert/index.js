import React from 'react';
import { Alert, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Alert',
  examples: ['basic', 'duration'],
  dependencies: {
    ButtonToolbar,
    Button,
    Alert
  }
});
