import React from 'react';
import { MultiCascader, Button, Icon, Toggle, RadioGroup, Radio } from 'rsuite';
import { getProvince } from '../../resources/data';
import createComponentExample from '../createComponentExample';
import PreventOverflowContainer from '../../fixtures/PreventOverflowContainer';

export default createComponentExample({
  id: 'MultiCascader',
  examples: [
    'basic',
    'appearance',
    'size',
    'cascade',
    'default-value',
    'controlled',
    'block',
    'placement',
    'custom',
    'disabled',
    'uncheckable',
    'async',
    'container'
  ],
  getDependencies: getProvince,
  dependencies: {
    RadioGroup,
    Radio,
    MultiCascader,
    Button,
    Icon,
    Toggle,
    PreventOverflowContainer
  }
});
