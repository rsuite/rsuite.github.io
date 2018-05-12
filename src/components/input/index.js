import React from 'react';
import { Input, InputGroup, Icon, Whisper, Tooltip, Grid, Row, Col } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Input',
  examples: [
    'basic',
    'size',
    'textarea',
    'disabled',
    'input-group',
    'input-group-inside',
    'input-group-button',
    'tooltip'
  ],
  dependencies: {
    Input,
    InputGroup,
    Icon,
    Whisper,
    Tooltip,
    Grid,
    Row,
    Col
  }
});
