import React from 'react';
import { Cascader, Button, Icon } from 'rsuite';
import _ from 'lodash';
import { findNodeOfTree } from 'rsuite-utils/lib/utils';
import data from '../../resources/data/province-simplified';

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
  dependencies: {
    Cascader,
    Button,
    data,
    findNodeOfTree,
    Icon,
    get: _.get,
    cloneDeep: _.cloneDeep
  }
});
