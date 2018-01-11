import React from 'react';
import ComponentExample from '../ComponentExample';
import { ButtonToolbar, Button, Modal, Icon, Toggle } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./backdrop.md'),
  require('./size.md'),
  require('./full.md'),
  require('./overflow.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        Modal,
        Icon,
        Toggle
      }}
      context={context}
      examples={examples}
    />
  );
};
