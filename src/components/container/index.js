import React from 'react';
import ComponentExample from '../ComponentExample';
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
  Toggle,
  Dropdown,
  FlexboxGird,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar
} from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./sidebar-page.md'), require('./login-page.md')];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Divider,
        Icon,
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
        ButtonToolbar
      }}
      context={context}
      examples={examples}
    />
  );
};
