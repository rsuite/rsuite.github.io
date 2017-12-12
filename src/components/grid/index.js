import React from 'react';
import ComponentExample from '../ComponentExample';
import { Grid, Button, IconFont, Row, Col } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        IconFont,
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
