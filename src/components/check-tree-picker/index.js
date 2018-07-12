import React from 'react';
import { CheckTreePicker, Button, Icon } from 'rsuite';
import data from '../../resources/data/city';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckTreePicker',
  examples: ['basic', 'placement', 'disabled', 'custom', 'async'],
  dependencies: {
    Icon,
    Button,
    CheckTreePicker,
    data
  }
});
