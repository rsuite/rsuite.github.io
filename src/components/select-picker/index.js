import React from 'react';
import { SelectPicker, Button, Icon } from 'rsuite';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'SelectPicker',
  examples: [
    'basic',
    'appearance',
    'group',
    'placement',
    'custom',
    'custom-toggle',
    'disabled',
    'searchable',
    'async',
    'container'
  ],
  dependencies: {
    SelectPicker,
    Button,
    Icon,
    data
  }
});
