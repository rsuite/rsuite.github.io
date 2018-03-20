import React from 'react';
import ComponentExample from '../ComponentExample';
import { CheckTreePicker, Icon } from '../../rsuiteSource';
import data from '../../../public/resources/data/city';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./placement.md'),
  require('./disabled.md'),
  require('./custom.md'),
  require('./async.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        Icon,
        CheckTreePicker,
        data
      }}
    />
  );
};
