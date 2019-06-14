import React from 'react';
import { TagPicker, Button, Icon } from 'rsuite';
import _remove from 'lodash/remove';
import fetch from 'isomorphic-fetch';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'TagPicker',
  examples: [
    'basic',
    'size',
    'block',
    'group',
    'creatable',
    'custom',
    'disabled',
    'async'
  ],
  dependencies: {
    fetch,
    _remove,
    TagPicker,
    Button,
    Icon,
    data
  }
});
