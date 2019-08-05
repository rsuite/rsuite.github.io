import React from 'react';
import { Whisper, Tooltip, ButtonToolbar, Button } from 'rsuite';
import createComponentExample from '../createComponentExample';
import PreventOverflowContainer from '@/components/PreventOverflowContainer';

export default createComponentExample({
  id: 'Tooltip',
  examples: ['basic', 'placement', 'trigger', 'container'],
  dependencies: {
    PreventOverflowContainer,
    ButtonToolbar,
    Button,
    Whisper,
    Tooltip
  }
});
