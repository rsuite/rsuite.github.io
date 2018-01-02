import React from 'react';
import ComponentExample from '../ComponentExample';
import { Loader } from '../../rsuiteSource';
import Paragraph from '../../fixtures/Paragraph';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./content.md'),
  require('./size.md'),
  require('./speed.md'),
  require('./center.md'),
  require('./inverse.md'),
  require('./backdrop.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Paragraph,
        Loader
      }}
      examples={examples}
    />
  );
};
