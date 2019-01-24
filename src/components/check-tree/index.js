import React from 'react';
import { CheckTree, Toggle, Icon } from 'rsuite';
import { getCity } from '../../resources/data';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckTree',
  examples: ['basic', 'cascade', 'custom', 'virtualized'],
  getDependencies: getCity,
  dependencies: {
    CheckTree,
    Toggle,
    Icon
  }
});
