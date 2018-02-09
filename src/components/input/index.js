import React from 'react';
import ComponentExample from '../ComponentExample';
import {
  Input,
  InputGroup,
  Icon,
  Whisper,
  Tooltip
} from '../../rsuiteSource';


const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./size.md'),
  require('./textarea.md'),
  require('./disabled.md'),
  require('./input-group.md'),
  require('./input-group-inside.md'),
  require('./input-group-button.md'),
  require('./tooltip.md')
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        Input,
        InputGroup,
        Icon,
        Whisper,
        Tooltip
      }}
      context={context}
      examples={examples}
    />
  );
};
