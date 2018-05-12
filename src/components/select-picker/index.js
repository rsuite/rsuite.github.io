import React from 'react';
import { SelectPicker, Icon } from '../../rsuiteSource';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'SelectPicker',
  examples: ['basic', 'group', 'placement', 'custom', 'disabled', 'searchable', 'async'],
  dependencies: {
    SelectPicker,
    Icon,
    data
  }
});
