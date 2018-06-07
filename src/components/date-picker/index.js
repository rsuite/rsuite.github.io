import React from 'react';
import moment from 'moment';

import { DatePicker, Button } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DatePicker',
  examples: [
    'basic',
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
    'custom-toggle'
  ],
  dependencies: {
    moment,
    Button,
    DatePicker
  }
});
