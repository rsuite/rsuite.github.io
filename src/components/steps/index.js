import React from 'react';
import ComponentExample from '../ComponentExample';
import { Steps, Icon, ButtonGroup, Button } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./title.md'),
  require('./description.md'),
  require('./vertical.md'),
  require('./status.md'),
  require('./size.md'),
  require('./icon.md'),
  require('./dynamic.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Icon,
        Steps,
        ButtonGroup,
        Button
      }}
      examples={examples}
    />
  );
};
