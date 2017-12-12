import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, ButtonToolbar, IconFont } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./shape.md'),
  require('./block.md'),
  require('./disabled.md')
];



export default () => {

  return (
    <div>
      <ComponentExample
        context={context}
        examples={examples}
        dependencies={{
          ButtonToolbar,
          Button,
          IconFont
        }}
      />
    </div>


  );
};
