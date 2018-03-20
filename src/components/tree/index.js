import React from 'react';
import ComponentExample from '../ComponentExample';
import { Tree } from '../../rsuiteSource';
import data from '../../../public/resources/data/city';

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
        Tree,
        data
      }}
    />
  );
};
