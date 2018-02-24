import React from 'react';
import ComponentExample from '../ComponentExample';
import { CheckTreePicker } from '../../rsuiteSource';
import data from '../../../resources/data/city';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./placement.md'),
  require('./disabled.md'),
  require('./custom.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        CheckTreePicker,
        data
      }}
    />
  );
};
