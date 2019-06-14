import React from 'react';
import { Cascader, Button, Icon, RadioGroup, Radio } from 'rsuite';
import { getProvince } from '../../resources/data';
import createComponentExample from '../createComponentExample';
import PreventOverflowContainer from '../../fixtures/PreventOverflowContainer';

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
    'container'
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
