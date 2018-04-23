import React from 'react';
import ComponentExample from '../ComponentExample';

const context = require('./index.md');
const examples = [];

export default () => {
  return <ComponentExample context={context} examples={examples} />;
};
