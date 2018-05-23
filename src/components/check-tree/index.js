import React from 'react';
import { CheckTree, Toggle, Icon } from 'rsuite';
import data from '../../resources/data/city';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'CheckTree',
  examples: ['basic', 'cascade', 'custom'],
  dependencies: {
    CheckTree,
    Toggle,
    Icon,
    data
  }
});
