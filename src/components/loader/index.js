import React from 'react';
import { Loader } from '../../rsuiteSource';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Loader',
  examples: ['basic', 'content', 'size', 'speed', 'center', 'backdrop', 'inverse'],
  dependencies: {
    Loader
  }
});
