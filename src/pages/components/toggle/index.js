import React from 'react';
import { Button, Toggle, Icon } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Toggle',
  examples: ['basic', 'size', 'inner', 'disabled'],
  dependencies: {
    Icon,
    Toggle,
    Button
  }
});
