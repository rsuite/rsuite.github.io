import React from 'react';
import ComponentExample from '../ComponentExample';
import { Notification, Button, ButtonToolbar } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./status.md'),
  require('./placement.md'),
  require('./custom.md'),
  require('./duration.md')
];

export default () => {
  return (
    <ComponentExample
      id="Notification"
      context={context}
      dependencies={{
        ButtonToolbar,
        Button,
        Notification
      }}
      examples={examples}
    />
  );
};
