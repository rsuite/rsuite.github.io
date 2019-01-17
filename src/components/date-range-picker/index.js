import React from 'react';
import { addDays, isAfter, isBefore, subDays } from 'date-fns';
import { DateRangePicker, Button, Divider } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DateRangePicker',
  examples: [
    'basic',
    'appearance',
    'block',
    'placeholder',
    'hover-range',
    'one-tap',
    'disabled',
    'toolbar',
    'value',
    'intl'
  ],
  dependencies: {
    subDays,
    addDays,
    isAfter,
    isBefore,
    Button,
    Divider,
    DateRangePicker
  }
});
