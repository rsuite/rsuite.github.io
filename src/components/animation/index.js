import React from 'react';
import { Animation, Button } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

const { Fade, Collapse, Transition } = Animation;

export default createComponentExample({
  id: 'animation',
  examples: ['fade', 'collapse', 'transition'],
  dependencies: {
    Button,
    Fade,
    Collapse,
    Transition
  }
});
