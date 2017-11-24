import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Nav, Button, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./pills.md')),
  splitDocs(require('./tabs.md')),
  splitDocs(require('./stacked.md')),
  splitDocs(require('./justified.md')),
  splitDocs(require('./dropdown.md')),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        IconFont,
        Button,
        Nav
      }}
      context={context}
      examples={examples}
    />
  );
};
