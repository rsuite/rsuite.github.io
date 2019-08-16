import React from 'react';
import { FlexboxGrid, Button, Icon, Divider, Col } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'FlexboxGrid',
  examples: ['basic', 'justify', 'align', 'order','responsive'],
  dependencies: {
    Divider,
    Icon,
    Button,
    FlexboxGrid,
    Col
  }
});
