import React from 'react';
import ComponentExample from '../ComponentExample';
import { Loader } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./content.md'),
  require('./size.md'),
  require('./speed.md'),
  require('./center.md'),
  require('./backdrop.md'),
  require('./inverse.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Loader
      }}
      examples={examples}
    />
  );
};
