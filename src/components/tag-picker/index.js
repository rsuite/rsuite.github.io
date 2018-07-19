import React from 'react';
import { TagPicker, Button, Icon } from 'rsuite';
import _remove from 'lodash/remove';
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
    _remove,
    TagPicker,
    Button,
    Icon,
    data
  }
});
