import React from 'react';
import { Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'html-elements',
  examples: ['anchor', 'heading', 'paragraph', 'list-ul', 'list-ol', 'list-dl'],
  dependencies: { Button, ButtonToolbar }
});
