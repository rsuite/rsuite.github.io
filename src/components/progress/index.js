import React from 'react';
import ComponentExample from '../ComponentExample';
import { Progress, Button, ButtonGroup } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./line.md'), require('./circle.md'), require('./dynamic.md')];

export default () => {
  return (
    <ComponentExample
      id="Progress"
      context={context}
      dependencies={{
        Progress,
        ButtonGroup,
        Button
      }}
      examples={examples}
    />
  );
};
