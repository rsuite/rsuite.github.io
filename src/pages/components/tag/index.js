import React from 'react';
import { Tag, TagGroup, Icon, IconButton, Input } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Tag',
  examples: ['basic', 'color', 'dynamic'],
  dependencies: {
    Tag,
    TagGroup,
    IconButton,
    Input,
    Icon
  }
});
