import React from 'react';
import ComponentExample from '../ComponentExample';
import { Cascader, Button, Icon } from '../../rsuiteSource';
import { findNodeOfTree } from 'rsuite-utils/lib/utils';
import data from '../../resources/data/province';
import province from '../../resources/data/province-simplified';



const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./placement.md'),
  require('./custom.md'),
  require('./disabled.md'),
  require('./asyn.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        Cascader,
        data,
        province,
        findNodeOfTree,
        Icon,
        get: _.get,
        cloneDeep: _.cloneDeep,
      }}
    />
  );
};
