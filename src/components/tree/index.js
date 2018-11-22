import React from 'react';
import { Tree } from 'rsuite';
import { getCity } from '../../resources/data';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Tree',
  examples: ['basic'],
  getDependencies: getCity,
  dependencies: {
    Tree
  }
});
