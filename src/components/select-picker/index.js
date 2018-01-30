import React from 'react';
import ComponentExample from '../ComponentExample';
import { SelectPicker } from '../../rsuiteSource';
import data from '../../../resources/data/users';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./group.md'),
  require('./placement.md'),
  require('./custom.md'),
  require('./disabled.md'),
  require('./searchable.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        SelectPicker,
        data
      }}
    />
  );
};
