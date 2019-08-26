import React from 'react';
import { Notification, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Notification',
  examples: ['basic', 'status', 'placement', 'custom', 'close', 'duration'],
  dependencies: {
    ButtonToolbar,
    Button,
    Notification
  }
});
