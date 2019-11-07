import React from 'react';
import { Carousel, Radio, RadioGroup, Divider } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Carousel',
  examples: ['basic', 'appearance', 'autoplay'],
  dependencies: { Carousel, RadioGroup, Radio, Divider }
});
