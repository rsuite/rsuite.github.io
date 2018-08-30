import React from 'react';
import { TreePicker, Button, Icon } from 'rsuite';
import data from '../../resources/data/city';
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
  dependencies: {
    TreePicker,
    Button,
    Icon,
    data
  }
});
