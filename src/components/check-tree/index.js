import React from 'react';
import ComponentExample from '../ComponentExample';
import { CheckTree, Toggle, Icon } from '../../rsuiteSource';
import data from '../../resources/data/city';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./cascade.md'), require('./custom.md')];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        CheckTree,
        Toggle,
        Icon,
        data
      }}
    />
  );
};
