import React from 'react';
import { Breadcrumb, Icon } from 'rsuite';
import { Link } from 'react-router';

import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Breadcrumb',
  examples: ['basic', 'separator', 'with-router'],
  dependencies: {
    Link,
    Icon,
    Breadcrumb
  }
});
