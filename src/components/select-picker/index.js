import React from 'react';
import { SelectPicker, Button, Icon, RadioGroup, Radio } from 'rsuite';
import data from '../../resources/data/users';
import createComponentExample from '../createComponentExample';
import PreventOverflowContainer from '../../fixtures/PreventOverflowContainer';

export default createComponentExample({
  id: 'SelectPicker',
  examples: [
    'basic',
    'appearance',
    'size',
    'block',
    'group',
    'placement',
    'custom',
    'disabled',
    'searchable',
    'async',
    'container',
    'controlled'
  ],
  dependencies: {
    PreventOverflowContainer,
    SelectPicker,
    Button,
    Icon,
    data,
    RadioGroup,
    Radio
  }
});
