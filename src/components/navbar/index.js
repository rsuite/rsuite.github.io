import React from 'react';
import { Navbar, Nav, Button, Icon, Dropdown } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Navbar',
  examples: ['basic', 'appearance'],
  dependencies: {
    Dropdown,
    Icon,
    Button,
    Navbar,
    Nav
  }
});
