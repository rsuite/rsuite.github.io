import React from 'react';
import { Affix, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Affix',
  examples: ['container'],
  dependencies: {
    ButtonToolbar,
    Button,
    Affix
  }
});
