import React from 'react';
import createComponentExample from '../createComponentExample';
import { Uploader, Icon } from '../../rsuiteSource';

export default createComponentExample({
  id: 'Uploader',
  examples: ['basic', 'picture', 'picture-text', 'file-list', 'disabled'],
  dependencies: {
    Icon,
    Uploader
  }
});
