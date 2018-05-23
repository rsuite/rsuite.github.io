import React from 'react';
import Logo from '../../fixtures/Logo';
import {
  Container,
  Header,
  Footer,
  Sidebar,
  Content,
  Button,
  Divider,
  Sidenav,
  Nav,
  Icon,
  IconButton,
  Toggle,
  Dropdown,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Navbar
} from 'rsuite';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Container',
  examples: ['basic', 'sidebar-page', 'navbar-page', 'login-page'],
  dependencies: {
    Logo,
    Divider,
    Icon,
    IconButton,
    Button,
    Container,
    Header,
    Footer,
    Sidebar,
    Content,
    Sidenav,
    Nav,
    Toggle,
    Dropdown,
    FlexboxGrid,
    Panel,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    ButtonToolbar,
    Navbar
  }
});
