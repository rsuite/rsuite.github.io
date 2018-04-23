import React from 'react';
import ComponentExample from '../ComponentExample';
import { Timeline, Icon } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./custom.md')];


export default () => {
  return (
    <ComponentExample
      id="Timeline"
      dependencies={{
        Timeline,
        Icon
      }}
      context={context}
      examples={examples}
    />
  );
};
