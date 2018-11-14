import React from 'react';
import { MultiCascader, Button, Icon, Toggle } from 'rsuite';
import _ from 'lodash';
import { findNodeOfTree } from 'rsuite-utils/lib/utils';
import data from '../../resources/data/province-simplified';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'MultiCascader',
  examples: [
    'basic',
    'appearance',
    'cascade',
    'default-value',
    'controlled',
    'block',
    'placement',
    'custom',
    'disabled',
    'uncheckable',
    'async',
    'container'
  ],
  dependencies: {
    MultiCascader,
    Button,
    data,
    findNodeOfTree,
    Icon,
    Toggle,
    get: _.get,
    clone: _.cloneDeep
  }
});
