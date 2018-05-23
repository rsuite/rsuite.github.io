import React from 'react';
import { Divider, Button, ButtonGroup } from 'rsuite';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Divider',
  examples: ['basic', 'with-text', 'vertical'],
  dependencies: {
    Divider,
    ButtonGroup,
    Button
  }
});
