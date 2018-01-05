import React from 'react';
import ComponentExample from '../ComponentExample';
import { Steps,Icon } from '../../rsuiteSource';



const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./title.md'),
  require('./description.md'),
  require('./vertical.md'),
  require('./status.md'),
  require('./icon.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Icon,
        Steps
      }}
      examples={examples}
    />
  );
};
