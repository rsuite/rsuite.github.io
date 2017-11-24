import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Dropdown, Button, IconFont,ButtonToolbar } from 'rsuite';


const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./size.md')),
  splitDocs(require('./block.md')),
  splitDocs(require('./select.md')),
  splitDocs(require('./noCaret.md')),
  splitDocs(require('./block.md'))
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        IconFont,
        Dropdown,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
