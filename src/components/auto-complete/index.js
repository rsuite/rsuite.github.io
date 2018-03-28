import React from 'react';
import ComponentExample from '../ComponentExample';
import { AutoComplete, Icon } from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./email.md'),
  require('./render-item.md'),
  require('./disabled.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      id="AutoComplete"
      dependencies={{
        AutoComplete,
        Icon
      }}
      examples={examples}
    />
  );
};
