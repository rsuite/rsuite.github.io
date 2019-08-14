import React from 'react';
import { Notification, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Notification',
  examples: ['basic', 'status', 'placement', 'custom', 'duration'],
  dependencies: {
    ButtonToolbar,
    Button,
    Notification
  }
});
