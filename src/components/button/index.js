import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, IconButton, ButtonGroup, ButtonToolbar, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./shape.md'),
  require('./icon-button.md'),
  require('./block.md'),
  require('./disabled.md'),
  require('./group-basic.md'),
  require('./toolbar.md'),
  require('./vertical.md'),
  require('./justified.md')
];


export default () => {

  return (
    <div>
      <ComponentExample
        context={context}
        examples={examples}
        dependencies={{
          Button,
          IconButton,
          ButtonGroup,
          ButtonToolbar,
          Icon
        }}
      />
    </div>


  );
};
