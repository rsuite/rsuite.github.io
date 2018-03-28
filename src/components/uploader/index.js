import React from 'react';
import ComponentExample from '../ComponentExample';
import { Uploader, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./picture.md'),
  require('./picture-text.md'),
  require('./file-list.md'),
  require('./disabled.md')
];

export default () => {
  return (
    <ComponentExample
      id="Uploader"
      context={context}
      examples={examples}
      dependencies={{
        Icon,
        Uploader
      }}
    />
  );
};
