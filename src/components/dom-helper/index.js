import React from 'react';
import ComponentExample from '../ComponentExample';
import { ButtonToolbar, Button, DOMHelper } from '../../rsuiteSource';
const context = require('./index.md');
const examples = [
  require('./class-helper.md'),
  require('./style-helper.md'),
  require('./event-helper.md'),
  require('./scroll-helper.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        ...DOMHelper
      }}
      context={context}
      examples={examples}
    />
  );
};
