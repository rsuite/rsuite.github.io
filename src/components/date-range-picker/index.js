import React from 'react';
import moment from 'moment';
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
    moment,
    Button,
    Divider,
    DateRangePicker
  }
});
