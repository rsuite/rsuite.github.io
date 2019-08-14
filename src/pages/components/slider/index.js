import React from 'react';
import { Slider, Row, Col, Input } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Slider',
  examples: ['basic', 'progress', 'graduated', 'vertical', 'disabled', 'value', 'custom', 'size'],
  dependencies: {
    Slider,
    Input,
    Row,
    Col
  }
});
