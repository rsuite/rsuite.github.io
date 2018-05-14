import React from 'react';
import { Button, Toggle, Icon } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Toggle',
  examples: ['basic', 'size', 'inner', 'disabled'],
  dependencies: {
    Icon,
    Toggle,
    Button
  }
});
