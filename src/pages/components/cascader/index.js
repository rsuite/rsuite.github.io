import React from 'react';
import { Cascader, Button, Icon, RadioGroup, Radio } from 'rsuite';
import { getProvince } from '@/resources/data';
import createComponentExample from '@/utils/createComponentExample';
import PreventOverflowContainer from '@/components/PreventOverflowContainer';

export default createComponentExample({
  id: 'Cascader',
  examples: [
    'basic',
    'appearance',
    'size',
    'block',
    'placement',
    'custom',
    'disabled',
    'async',
    'controlled',
    'container',
    'inline'
  ],
  getDependencies: getProvince,
  dependencies: {
    PreventOverflowContainer,
    Cascader,
    Button,
    Icon,
    RadioGroup,
    Radio
  }
});
