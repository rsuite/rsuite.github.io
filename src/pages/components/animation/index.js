import React from 'react';
import { Animation, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

const { Fade, Collapse, Bounce, Slide, Transition } = Animation;

export default createComponentExample({
  id: 'animation',
  examples: ['fade', 'collapse', 'bounce', 'slide', 'transition'],
  dependencies: {
    Button,
    ButtonToolbar,
    Fade,
    Collapse,
    Bounce,
    Slide,
    Transition
  }
});
