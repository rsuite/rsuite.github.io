import React from 'react';
import { Timeline, Icon, Grid, Row, Col } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Timeline',
  examples: ['basic', 'align', 'time', 'custom'],
  dependencies: {
    Timeline,
    Icon,
    Grid,
    Row,
    Col
  }
});
