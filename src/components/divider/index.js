import React from 'react';
import ComponentExample from '../ComponentExample';
import { Divider, Button, ButtonGroup } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./with-text.md'), require('./vertical.md')];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Divider,
        ButtonGroup,
        Button
      }}
      examples={examples}
    />
  );
};
