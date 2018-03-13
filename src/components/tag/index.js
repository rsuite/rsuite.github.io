import React from 'react';
import ComponentExample from '../ComponentExample';
import { Tag, Icon, IconButton, Input } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./color.md'), require('./dynamic.md')];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Tag,
        IconButton,
        Input,
        Icon
      }}
      context={context}
      examples={examples}
    />
  );
};
