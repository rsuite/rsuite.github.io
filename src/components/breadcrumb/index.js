import React from 'react';
import { Breadcrumb, Icon } from 'rsuite';
import { Link } from 'react-router';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Breadcrumb',
  examples: ['basic', 'separator', 'with-router'],
  dependencies: {
    Link,
    Icon,
    Breadcrumb
  }
});
