import React from 'react';
import ComponentExample from '../ComponentExample';
import { Grid, Button, Icon, Row, Col } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./gutter.md'),
  require('./offset.md'),
  require('./pull-push.md'),
  require('./hidden.md'),
  require('./nested.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Icon,
        Button,
        Grid,
        Row,
        Col
      }}
      context={context}
      examples={examples}
    />
  );
};
