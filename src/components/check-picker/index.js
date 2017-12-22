import React from 'react';
import ComponentExample from '../ComponentExample';
import { CheckPicker } from '../../rsuiteSource';
import data from '../../../resources/data/users';

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
        CheckPicker,
        data
      }}
    />
  );
};
