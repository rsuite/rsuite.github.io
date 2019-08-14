import React from 'react';
import { ButtonToolbar, Button, Whisper, Popover } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';
import PreventOverflowContainer from '@/components/PreventOverflowContainer';

export default createComponentExample({
  id: 'Popover',
  examples: ['basic', 'placement', 'trigger', 'container'],
  dependencies: {
    PreventOverflowContainer,
    ButtonToolbar,
    Button,
    Whisper,
    Popover
  }
});
