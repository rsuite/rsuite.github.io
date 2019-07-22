import React from 'react';
import dateFns from 'date-fns';

import { DatePicker, Button } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DatePicker',
  examples: [
    'basic',
    'one-tap',
    'appearance',
    'block',
    'placeholder',
    'inline',
    'format',
    'format-month',
    'format-time',
    'iso-week',
    'disabled',
    'intl',
    'placement',
    'custom',
    'control',
    'show-week-numbers'
  ],
  dependencies: {
    dateFns,
    Button,
    DatePicker
  }
});
