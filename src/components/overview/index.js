import React from 'react';

import ComponentExample from '../ComponentExample';

const context = require('./index.md');
const examples = [];


export default () => {
  return (
    <ComponentExample
      className="component-overview"
      context={context}
      examples={examples}
    />
  );
};
