import React from 'react';
import ComponentExample from '../ComponentExample';
import { DatePicker } from '../../rsuiteSource';

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
        DatePicker
      }}
    />
  );
};
