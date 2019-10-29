import React from 'react';
import { Affix, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Affix',
  examples: ['basic', 'top'],
  dependencies: {
    ButtonToolbar,
    Button,
    Affix
  }
});
