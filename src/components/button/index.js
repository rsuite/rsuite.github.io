import React from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar, Panel, Icon } from '../../rsuiteSource';
import * as SvgIcons from '../../fixtures/SvgIcons';

import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Button',
  examples: [
    'basic',
    'appearance',
    'size',
    'color',
    'custom',
    'icon-button',
    'block',
    'disabled',
    'active',
    'loading',
    'group-basic',
    'vertical',
    'toolbar',
    'justified'
  ],
  dependencies: {
    SvgIcons,
    Button,
    IconButton,
    ButtonGroup,
    ButtonToolbar,
    Icon,
    Panel
  }
});
