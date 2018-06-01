import React from 'react';
import moment from 'moment';
import { DateRangePicker, Button } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DateRangePicker',
  examples: [
    'basic',
    'placeholder',
    'hover-range',
    'one-tap',
    'disabled',
    'toolbar',
    'value',
    'intl',
    'custom-toggle'
  ],
  dependencies: {
    moment,
    Button,
    DateRangePicker
  }
});
