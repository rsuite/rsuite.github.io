import React from 'react';
import { AutoComplete, InputGroup, Icon } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'AutoComplete',
  examples: ['basic', 'email', 'render-item', 'disabled', 'input-group', 'controlled'],
  dependencies: { InputGroup, AutoComplete, Icon }
});
