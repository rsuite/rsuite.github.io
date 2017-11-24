import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Grid, Button, IconFont, Row, Col } from 'rsuite';


const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
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
