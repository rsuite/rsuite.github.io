import React from 'react';
import {
  Slider,
  RangeSlider,
  Row,
  Col,
  Input,
  InputNumber,
  InputGroup
} from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Slider',
  examples: [
    'basic',
    'progress',
    'graduated',
    'vertical',
    'disabled',
    'value',
    'custom',
    'size'
  ],
  dependencies: {
    RangeSlider,
    Slider,
    Input,
    InputNumber,
    InputGroup,
    Row,
    Col
  }
});
