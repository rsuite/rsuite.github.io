import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, IconFont, Panel, PanelGroup } from 'rsuite';

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
        IconFont,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
