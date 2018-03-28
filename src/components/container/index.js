import React from 'react';
import ComponentExample from '../ComponentExample';
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
  FlexboxGird,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Navbar
} from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./sidebar-page.md'),
  require('./navbar-page.md'),
  require('./login-page.md')
];

export default () => {
  return (
    <ComponentExample
      id="Container"
      dependencies={{
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
        FlexboxGird,
        Panel,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        ButtonToolbar,
        Navbar
      }}
      context={context}
      examples={examples}
    />
  );
};
