import React from 'react';
import { Dropdown, Button, Icon, ButtonToolbar, IconButton, ButtonGroup } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Dropdown',
  examples: [
    'basic',
    'trigger',
    'active',
    'disabled',
    'icons',
    'divider',
    'placement',
    'submenu',
    'custom',
    'buttons'
  ],
  dependencies: {
    ButtonToolbar,
    ButtonGroup,
    IconButton,
    Icon,
    Dropdown,
    Button
  }
});
