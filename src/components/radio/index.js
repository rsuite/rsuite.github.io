import React from 'react';
import ComponentExample, { splitDocs } from '../ComponentExample';
import { Form, FormGroup, RadioGroup, IconFont, Button, Radio } from 'rsuite';

const context = require('./index.md');
const examples = [
  splitDocs(require('./basic.md')),
  splitDocs(require('./radioList.md')),
  splitDocs(require('./radioListInline.md')),
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        Form,
        FormGroup,
        RadioGroup,
        IconFont,
        Button,
        Radio
      }}
      context={context}
      examples={examples}
    />
  );
};
