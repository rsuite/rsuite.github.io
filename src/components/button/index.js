import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, IconButton, ButtonGroup, ButtonToolbar, Panel, Icon } from '../../rsuiteSource';
import * as SvgIcons from '../../fixtures/SvgIcons';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./appearance.md'),
  require('./size.md'),
  require('./color.md'),
  require('./custom.md'),
  require('./icon-button.md'),
  require('./block.md'),
  require('./disabled.md'),
  require('./active.md'),
  require('./loading.md'),
  require('./group-basic.md'),
  require('./vertical.md'),
  require('./toolbar.md'),
  require('./justified.md')
];


export default () => {

  return (
    <div>
      <ComponentExample
        context={context}
        examples={examples}
        dependencies={{
          SvgIcons,
          Button,
          IconButton,
          ButtonGroup,
          ButtonToolbar,
          Icon,
          Panel
        }}
      />
    </div>


  );
};
