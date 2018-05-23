import React from 'react';
import { CheckTreePicker, Icon } from 'rsuite';
import data from '../../resources/data/city';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckTreePicker',
  examples: ['basic', 'placement', 'disabled', 'custom', 'async'],
  dependencies: {
    Icon,
    CheckTreePicker,
    data
  }
});
