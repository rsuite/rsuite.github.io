import React from 'react';
import ComponentExample from '../ComponentExample';
import { Slider, Row, Col, Input } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./progress.md'),
  require('./graduated.md'),
  require('./vertical.md'),
  require('./disabled.md'),
  require('./value.md'),
  require('./custom.md')
];

export default () => {
  return (
    <ComponentExample
      id="Slider"
      context={context}
      dependencies={{
        Slider,
        Input,
        Row,
        Col
      }}
      examples={examples}
    />
  );
};
