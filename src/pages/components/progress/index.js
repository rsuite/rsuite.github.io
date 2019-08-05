import React from 'react';
import { Progress, Button, ButtonGroup } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Progress',
  examples: ['line', 'circle', 'dynamic'],
  dependencies: {
    Progress,
    ButtonGroup,
    Button
  }
});
