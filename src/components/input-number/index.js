import React from 'react';
import ComponentExample from '../ComponentExample';
import {
  InputNumber
} from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./decimals.md'),
  require('./max-min.md'),
  require('./step.md'),
  require('./disabled.md'),
  require('./fix.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        InputNumber
      }}
      context={context}
      examples={examples}
    />
  );
};
