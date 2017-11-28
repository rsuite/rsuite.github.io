import React from 'react';
import ComponentExample from '../ComponentExample';
import { Breadcrumb } from 'rsuite';
import { Link } from 'react-router';


const context = require('./index.md');
const examples = [
  require('./basic.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      dependencies={{
        Link,
        Breadcrumb
      }}
      examples={examples}
    />
  );
};
