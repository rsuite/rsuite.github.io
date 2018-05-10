import React from 'react';
import { ButtonToolbar, Button, DOMHelper } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DomHelper',
  examples: [
    'class-helper',
    'style-helper',
    'event-helper',
    'scroll-helper',
    'query',
    'dom-mouse-move-tracker'
  ],
  dependencies: {
    ButtonToolbar,
    Button,
    ...DOMHelper
  }
});
