import React from 'react';
import { Uploader, Icon } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Uploader',
  examples: ['basic', 'picture', 'picture-text', 'file-list', 'disabled'],
  dependencies: {
    Icon,
    Uploader
  }
});
