import React from 'react';
import { Notification, Button, ButtonToolbar } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Notification',
  examples: ['basic', 'status', 'placement', 'custom', 'duration'],
  dependencies: {
    ButtonToolbar,
    Button,
    Notification
  }
});
