import React from 'react';
import { Cascader, Button, Icon } from 'rsuite';
import { findNodeOfTree } from 'rsuite-utils/lib/utils';
import data from '../../resources/data/province';
import province from '../../resources/data/province-simplified';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Cascader',
  examples: ['basic', 'placement', 'custom', 'custom-toggle', 'disabled', 'asyn'],
  dependencies: {
    Cascader,
    Button,
    data,
    province,
    findNodeOfTree,
    Icon,
    get: _.get,
    cloneDeep: _.cloneDeep
  }
});
