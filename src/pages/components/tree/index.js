import React from 'react';
import { Tree } from 'rsuite';
import { getCity } from '@/resources/data';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Tree',
  examples: ['basic', 'virtualized'],
  getDependencies: getCity,
  dependencies: {
    Tree
  }
});
