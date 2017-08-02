import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import IconList from './IconList';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md'))
];


export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
    >
      <IconList />
    </ComponentExample>
  );
};


