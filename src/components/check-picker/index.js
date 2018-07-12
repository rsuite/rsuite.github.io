import React from 'react';
import { CheckPicker, Button, Icon, Checkbox } from 'rsuite';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckPicker',
  examples: [
    'basic',
    'appearance',
    'block',
    'group',
    'placement',
    'custom',
    'disabled',
    'searchable',
    'extra-footer',
    'async',
    'container'
  ],
  dependencies: {
    Checkbox,
    Button,
    CheckPicker,
    Icon,
    data
  }
});
