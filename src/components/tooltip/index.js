import React from 'react';
import ComponentExample from '../ComponentExample';
import { Whisper, Tooltip, ButtonToolbar, Button } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./placement.md'), require('./trigger.md')];

export default () => {
  return (
    <ComponentExample
      id="Tooltip"
      dependencies={{
        ButtonToolbar,
        Button,
        Whisper,
        Tooltip
      }}
      context={context}
      examples={examples}
    />
  );
};
