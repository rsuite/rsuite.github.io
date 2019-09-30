import React from 'react';
import { Link } from 'react-router';
import { Nav, Button, Icon, Dropdown, Row, Col, Slider } from 'rsuite';
import ResponsiveNav from '@rsuite/responsive-nav';
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
    'with-router',
    'responsive-nav',
    'removable-nav'
  ],
  dependencies: {
    Slider,
    ResponsiveNav,
    Dropdown,
    Icon,
    Button,
    Nav,
    Row,
    Col,
    Link
  }
});
