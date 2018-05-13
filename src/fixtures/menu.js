import React from 'react';
import { Icon, IconButton, Button } from '../rsuiteSource';
import { guide, component, tools } from './SvgIcons';
import components from './components';
import { getDict } from '../locales';

const dict = getDict();
const svgStyle = {
  width: 22
};

export default [
  {
    id: 'guide',
    name: dict.common.guide,
    icon: <Icon icon={guide} svgStyle={svgStyle} size="3x" />,
    children: [
      {
        id: 'introduction',
        name: dict.common.introduction
      },
      {
        id: 'usage',
        name: dict.common.usage
      },
      {
        id: 'use-with-create-react-app',
        name: dict.common.useWithCreateReactApp
      },
      {
        id: 'themes',
        name: dict.common.customizeTheme
      },
      {
        id: 'intl',
        name: dict.common.intl
      },
      {
        id: 'logs',
        name: dict.common.changeLog,
        target: '_blank',
        url: 'https://github.com/rsuite/rsuite/releases'
      }
    ]
  },
  {
    id: 'components',
    name: dict.common.components,
    icon: <Icon icon={component} svgStyle={svgStyle} size="3x" />,
    children: components
  },
  {
    id: 'tools',
    name: dict.common.tools,
    icon: <Icon icon={tools} svgStyle={svgStyle} />,
    children: [
      {
        id: 'palette',
        name: dict.common.palette
      },
      {
        id: 'icons',
        name: dict.common.icons
      }
    ]
  }
];
