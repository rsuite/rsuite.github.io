import React from 'react';
import { Grid, Button, Icon, Row, Col } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Grid',
  examples: ['basic', 'responsive', 'gutter', 'offset', 'pull-push', 'hidden', 'nested'],
  dependencies: {
    Icon,
    Button,
    Grid,
    Row,
    Col
  }
});
