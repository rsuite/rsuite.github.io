import React from 'react';
import { CheckPicker, Button, Icon, Checkbox, RadioGroup, Radio } from 'rsuite';
import data from '@/resources/data/users';
import createComponentExample from '@/utils/createComponentExample';
import PreventOverflowContainer from '@/components/PreventOverflowContainer';

export default createComponentExample({
  id: 'CheckPicker',
  examples: [
    'basic',
    'appearance',
    'size',
    'sticky',
    'block',
    'group',
    'placement',
    'custom',
    'disabled',
    'searchable',
    'extra-footer',
    'async',
    'container',
    'controlled'
  ],
  dependencies: {
    PreventOverflowContainer,
    Checkbox,
    Button,
    CheckPicker,
    Icon,
    data,
    RadioGroup,
    Radio
  }
});
