import React from 'react';
import { CheckTreePicker, Button, Icon, Toggle } from 'rsuite';
import data from '../../resources/data/city';
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
  dependencies: {
    Toggle,
    Icon,
    Button,
    CheckTreePicker,
    data
  }
});
