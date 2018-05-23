import React from 'react';
import { Nav, Button, Icon, Dropdown, Row, Col } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Nav',
  examples: ['basic', 'appearance', 'vertical', 'status', 'justified', 'dropdown', 'icon'],
  dependencies: {
    Dropdown,
    Icon,
    Button,
    Nav,
    Row,
    Col
  }
});
