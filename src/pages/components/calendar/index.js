import React from 'react';
import dateFns from 'date-fns';

import { Calendar, Button, Tag, Popover, Whisper, Badge } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Calendar',
  examples: ['basic', 'compact'],
  dependencies: {
    dateFns,
    Tag,
    Button,
    Calendar,
    Popover,
    Whisper,
    Badge
  }
});
