import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, Icon, Panel, PanelGroup } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./panelGroup.md'),
  require('./controlledPanelGroup.md'),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        PanelGroup,
        Panel,
        Icon,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
