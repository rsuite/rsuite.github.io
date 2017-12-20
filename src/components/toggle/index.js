import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, Toggle, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./inner.md'),
  require('./disabled.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Icon,
        Toggle,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};

