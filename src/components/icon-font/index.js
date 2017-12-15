import React from 'react';
import ComponentExample from '../ComponentExample';
import IconList from './IconList';
import { IconFont, Button } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./spin.md'),
  require('./rotate.md'),
  require('./size.md'),
  require('./stack.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        IconFont,
        Button
      }}
      context={context}
      examples={examples}
    >
      <IconList />
    </ComponentExample>
  );
};


