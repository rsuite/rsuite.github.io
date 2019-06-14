import React from 'react';
import { CheckTreePicker, Button, Icon, Toggle } from 'rsuite';
import { getCity } from '../../resources/data';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckTreePicker',
  examples: [
    'basic',
    'appearance',
    'size',
    'cascade',
    'placement',
    'disabled',
    'custom',
    'async',
    'uncheckable',
    'virtualized'
  ],
  getDependencies: getCity,
  dependencies: {
    Toggle,
    Icon,
    Button,
    CheckTreePicker
  }
});
