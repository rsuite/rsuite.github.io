import React from 'react';
import ComponentExample from '../ComponentExample';
import { Progress, Button } from '../../rsuiteSource';



const context = require('./index.md');
const examples = [
  require('./line.md'),
  require('./circle.md'),
  require('./custom.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Progress,
        Button
      }}
      examples={examples}
    />
  );
};
