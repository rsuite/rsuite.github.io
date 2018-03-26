import React from 'react';
import ComponentExample from '../ComponentExample';
import { ButtonToolbar, Button, DOMHelper } from '../../rsuiteSource';
import DOMMouseMoveTracker from '../../../../dom-lib/src/DOMMouseMoveTracker';
const context = require('./index.md');
const examples = [
  require('./class-helper.md'),
  require('./style-helper.md'),
  require('./event-helper.md'),
  require('./scroll-helper.md'),
  require('./query.md'),
  require('./dom-mouse-move-tracker.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        ...DOMHelper,
        DOMMouseMoveTracker
      }}
      context={context}
      examples={examples}
    />
  );
};
