import React from 'react';
import { Loader } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Loader',
  examples: ['basic', 'content', 'size', 'speed', 'center', 'backdrop', 'inverse'],
  dependencies: {
    Loader
  }
});
