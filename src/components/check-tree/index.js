import React from 'react';
import ComponentExample from '../ComponentExample';
import { CheckTree } from '../../rsuiteSource';
import data from './data/default';

const context = require('./index.md');
const examples = [
  require('./basic.md')
];

export default () => {

  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        CheckTree,
        data
      }}
    />
  );
};
