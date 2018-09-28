import React from 'react';
import { InputPicker, Button, Icon } from 'rsuite';
import fetch from 'isomorphic-fetch';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'InputPicker',
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
    fetch,
    InputPicker,
    Button,
    Icon,
    data
  }
});
