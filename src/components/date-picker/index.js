import React from 'react';
import { addDays, isSameDay, isBefore, subDays } from 'date-fns';

import { DatePicker, Button } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DatePicker',
  examples: [
    'basic',
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
    'control'
  ],
  dependencies: {
    subDays,
    addDays,
    isSameDay,
    isBefore,
    Button,
    DatePicker
  }
});
