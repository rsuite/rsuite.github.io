import React from 'react';
import { Icon, IconStack, Button } from 'rsuite';
import IconLogo from '../../resources/images/logo.svg';
import * as SvgIcons from '../../fixtures/SvgIcons';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Icon',
  examples: ['basic', 'spin', 'rotate', 'size', 'stack', 'custom'],
  dependencies: {
    SvgIcons,
    IconLogo,
    Icon,
    IconStack,
    Button
  }
});
