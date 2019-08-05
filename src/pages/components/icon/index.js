import React from 'react';
import { Icon, IconStack, Button, IconButton } from 'rsuite';
import IconLogo from '@/resources/images/logo.svg';
import * as SvgIcons from '@/components/SvgIcons';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Icon',
  examples: [
    'basic',
    'spin',
    'rotate',
    'size',
    'stack',
    'custom',
    'custom-svg'
  ],
  dependencies: {
    SvgIcons,
    IconLogo,
    Icon,
    IconStack,
    Button,
    IconButton
  }
});
