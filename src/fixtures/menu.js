import React from 'react';
import { Icon, IconButton, Button } from '../rsuiteSource';
import { guide, component, tools } from './SvgIcons';
import components from './components';

const svgStyle = {
  width: 22
};

export default [
  {
    id: 'guide',
    name: '新手指南',
    icon: <Icon icon={guide} svgStyle={svgStyle} size="3x" />,
    children: [
      {
        id: 'introduction',
        name: '介绍'
      },
      {
        id: 'usage',
        name: '如何使用'
      },
      {
        id: 'themes',
        name: '定制主题'
      },
      {
        id: 'intl',
        name: '国际化'
      },
      {
        id: 'logs',
        name: '更新日志',
        target: '_blank',
        url: 'https://github.com/rsuite/rsuite/releases'
      }
    ]
  },
  {
    id: 'components',
    name: '组件',
    icon: <Icon icon={component} svgStyle={svgStyle} size="3x" />,
    children: components
  },
  {
    id: 'tools',
    name: '工具',
    icon: <Icon icon={tools} svgStyle={svgStyle} />,
    children: [
      {
        id: 'palette',
        name: '调色板'
      },
      {
        id: 'icons',
        name: '图标库'
      }
    ]
  }
];
