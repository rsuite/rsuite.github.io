import React from 'react';
import { TreePicker, Button, Icon } from 'rsuite';
import { getCity } from '../../resources/data';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'TreePicker',
  examples: [
    'basic',
    'appearance',
    'placement',
    'disabled',
    'searchable',
    'custom',
    'async'
  ],
  getDependencies: getCity,
  dependencies: {
    TreePicker,
    Button,
    Icon
  }
});
