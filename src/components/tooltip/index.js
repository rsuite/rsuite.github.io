import React from 'react';
import { Whisper, Tooltip, ButtonToolbar, Button } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Tooltip',
  examples: ['basic', 'placement', 'trigger'],
  dependencies: {
    ButtonToolbar,
    Button,
    Whisper,
    Tooltip
  }
});
