import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import IconList from './IconList';
import { IconFont, Button } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md'))
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


