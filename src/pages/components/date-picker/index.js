import React from 'react';
import dateFns from 'date-fns';

import { DatePicker, Button, InputGroup } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'DatePicker',
  examples: [
    'basic',
    'size',
    'one-tap',
    'appearance',
    'block',
    'placeholder',
    'format',
    'format-month',
    'format-time',
    'iso-week',
    'disabled',
    'intl',
    'placement',
    'custom',
    'control',
    'range',
    'show-week-numbers'
  ],
  dependencies: {
    dateFns,
    Button,
    DatePicker,
    InputGroup
  }
});
