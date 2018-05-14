import React from 'react';
import { Tag, Icon, IconButton, Input } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Tag',
  examples: ['basic', 'color', 'dynamic'],
  dependencies: {
    Tag,
    IconButton,
    Input,
    Icon
  }
});
