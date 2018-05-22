import React from 'react';
import { ButtonToolbar, Button, Modal, Icon, Toggle } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Modal',
  examples: ['basic', 'backdrop', 'size', 'full', 'overflow', 'confirm'],
  dependencies: {
    ButtonToolbar,
    Button,
    Modal,
    Icon,
    Toggle
  }
});
