import React from 'react';
import ComponentExample from '../ComponentExample';
import { Portal, Button } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md')];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Button,
        Portal
      }}
      examples={examples}
    />
  );
};
