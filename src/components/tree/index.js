import React from 'react';
import ComponentExample from '../ComponentExample';
import { Tree } from '../../rsuiteSource';
import data from '../../resources/data/city';

const context = require('./index.md');
const examples = [require('./basic.md')];

export default () => {
  return (
    <ComponentExample
      id="Tree"
      context={context}
      examples={examples}
      dependencies={{
        Tree,
        data
      }}
    />
  );
};
