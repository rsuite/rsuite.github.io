import React from 'react';
import moment from 'moment';
import ComponentExample from '../ComponentExample';
import { DateRangePicker } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./hover-range.md'),
  require('./one-tap.md'),
  require('./disabled.md'),
  require('./toolbar.md'),
  require('./value.md'),
  require('./intl.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        moment,
        DateRangePicker
      }}
    />
  );
};
