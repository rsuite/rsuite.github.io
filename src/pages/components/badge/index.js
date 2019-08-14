import React from 'react';
import { Badge, Button } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Badge',
  examples: ['basic', 'content', 'independent'],
  dependencies: { Badge, Button }
});
