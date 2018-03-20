import React from 'react';
import ComponentExample from '../ComponentExample';
import { Alert, Button, ButtonToolbar } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./duration.md')];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        ButtonToolbar,
        Button,
        Alert
      }}
      examples={examples}
    />
  );
};
