import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Breadcrumb } from  'rsuite';


const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md'))
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Breadcrumb
      }}
      examples={examples}
    />
  );
};
