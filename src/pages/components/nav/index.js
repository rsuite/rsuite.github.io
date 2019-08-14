import React from 'react';
import { Link } from 'react-router';
import { Nav, Button, Icon, Dropdown, Row, Col } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Nav',
  examples: [
    'basic',
    'appearance',
    'vertical',
    'status',
    'justified',
    'dropdown',
    'icon',
    'with-router'
  ],
  dependencies: {
    Dropdown,
    Icon,
    Button,
    Nav,
    Row,
    Col,
    Link
  }
});
