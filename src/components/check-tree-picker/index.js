import React from 'react';
import { CheckTreePicker, Button, Icon, Toggle } from 'rsuite';
import { getCity } from '../../resources/data';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckTreePicker',
  examples: [
    'basic',
    'appearance',
    'cascade',
    'placement',
    'disabled',
    'custom',
    'async',
    'uncheckable'
  ],
  getDependencies: getCity,
  dependencies: {
    Toggle,
    Icon,
    Button,
    CheckTreePicker
  }
});
