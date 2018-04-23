import React from 'react';
import ComponentExample from '../ComponentExample';
import { Animation, Button } from '../../rsuiteSource';

const { Fade, Collapse, Transition } = Animation;

const context = require('./index.md');
const examples = [require('./fade.md'), require('./collapse.md'), require('./transition.md')];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Button,
        Fade,
        Collapse,
        Transition
      }}
      examples={examples}
    />
  );
};
