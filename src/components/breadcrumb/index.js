import React from 'react';
import { Breadcrumb, Icon } from '../../rsuiteSource';
import { Link } from 'react-router';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Breadcrumb',
  examples: ['basic', 'separator'],
  dependencies: {
    Link,
    Icon,
    Breadcrumb
  }
});
