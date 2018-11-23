import React from 'react';
import { Cascader, Button, Icon } from 'rsuite';
import _ from 'lodash';
import { findNodeOfTree } from 'rsuite-utils/lib/utils';
import { getProvince } from '../../resources/data';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Cascader',
  examples: [
    'basic',
    'appearance',
    'block',
    'placement',
    'custom',
    'disabled',
    'async',
    'container'
  ],
  getDependencies: getProvince,
  dependencies: {
    Cascader,
    Button,
    findNodeOfTree,
    Icon
  }
});
