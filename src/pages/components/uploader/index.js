import React from 'react';
import { Uploader, Icon, Button } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Uploader',
  examples: [
    'basic',
    'picture',
    'picture-text',
    'file-list',
    'file-list-custom',
    'disabled',
    'manually',
    'controlled'
  ],
  dependencies: {
    Icon,
    Uploader,
    Button
  }
});
