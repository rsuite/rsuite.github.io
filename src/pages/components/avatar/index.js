import React from 'react';
import { Avatar, Icon, Badge } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';
import AvatarUser from '@/resources/images/avatar-user.svg';

export default createComponentExample({
  id: 'Avatar',
  examples: ['basic', 'text', 'icon', 'image', 'size', 'badge'],
  dependencies: { Badge, Avatar, Icon, AvatarUser }
});
