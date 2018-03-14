import React from 'react';
import ComponentExample from '../ComponentExample';
import { FlexboxGird, Button, Icon, Divider } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./justify.md'),
  require('./align.md'),
  require('./order.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Divider,
        Icon,
        Button,
        FlexboxGird
      }}
      context={context}
      examples={examples}
    />
  );
};
