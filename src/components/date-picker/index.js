import React from 'react';
import moment from 'moment';
import ComponentExample from '../ComponentExample';
import { DatePicker } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./inline.md'),
  require('./format.md'),
  require('./format-month.md'),
  require('./format-time.md'),
  require('./iso-week.md'),
  require('./disabled.md'),
  require('./intl.md'),
  require('./placement.md'),
  require('./custom.md')
];

export default () => {
  return (
    <ComponentExample
      id="DatePicker"
      context={context}
      examples={examples}
      dependencies={{
        moment,
        DatePicker
      }}
    />
  );
};
