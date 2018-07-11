import React from 'react';
import { TagPicker, Button, Icon } from 'rsuite';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'TagPicker',
  examples: [
    'basic',
    'block',
    'group',
    'creatable',
    'custom',
    'disabled',
    'async'
  ],
  dependencies: {
    TagPicker,
    Button,
    Icon,
    data
  }
});
