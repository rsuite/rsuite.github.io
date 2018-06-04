import React from 'react';
import { Link } from 'react-router';
import {
  Dropdown,
  Button,
  Icon,
  ButtonToolbar,
  IconButton,
  ButtonGroup,
  Popover,
  Whisper
} from 'rsuite';
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
    'buttons',
    'menu-items',
    'with-popover',
    'with-router'
  ],
  dependencies: {
    ButtonToolbar,
    ButtonGroup,
    IconButton,
    Icon,
    Dropdown,
    Button,
    Popover,
    Whisper,
    Link
  }
});
