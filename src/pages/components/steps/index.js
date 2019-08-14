import React from 'react';
import { Steps, Icon, ButtonGroup, Button } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Steps',
  examples: ['basic', 'title', 'description', 'vertical', 'status', 'size', 'icon', 'dynamic'],
  dependencies: {
    Icon,
    Steps,
    ButtonGroup,
    Button
  }
});
