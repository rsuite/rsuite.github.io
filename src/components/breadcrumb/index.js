import React from 'react';
import ComponentExample from '../ComponentExample';
import { Breadcrumb, Icon } from '../../rsuiteSource';
import { Link } from 'react-router';

const context = require('./index.md');
const examples = [require('./basic.md'), require('./separator.md')];

export default () => {
  return (
    <ComponentExample
      context={context}
      id="Breadcrumb"
      dependencies={{
        Link,
        Icon,
        Breadcrumb
      }}
      examples={examples}
    />
  );
};
