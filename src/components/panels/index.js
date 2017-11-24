import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Button, IconFont, Panel, PanelGroup } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./panelGroup.md')),
  splitDocs(require('./controlledPanelGroup.md')),
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
