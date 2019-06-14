import React from 'react';
import dateFns from 'date-fns';
import { DateRangePicker, Button, Divider } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DateRangePicker',
  examples: [
    'basic',
    'appearance',
    'size',
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
    dateFns,
    Button,
    Divider,
    DateRangePicker
  }
});
