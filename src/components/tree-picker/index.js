import React from 'react';
import { TreePicker, Icon } from 'rsuite';
import data from '../../resources/data/city';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'TreePicker',
  examples: ['basic', 'placement', 'disabled', 'searchable', 'custom', 'async'],
  dependencies: {
    TreePicker,
    Icon,
    data
  }
});
