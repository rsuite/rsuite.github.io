import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { ButtonToolbar, Button, Modal, IconFont } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        Modal,
        IconFont
      }}
      context={context}
      examples={examples}
    />
  );
};
