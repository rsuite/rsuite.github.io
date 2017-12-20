import React from 'react';
import ComponentExample from '../ComponentExample';
import { ButtonToolbar, Button, Modal, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        Modal,
        Icon
      }}
      context={context}
      examples={examples}
    />
  );
};
