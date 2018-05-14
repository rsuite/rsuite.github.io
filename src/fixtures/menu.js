import React from 'react';
import { Icon, IconButton, Button } from '../rsuiteSource';
import { guide, component, tools } from './SvgIcons';
import components from './components';
import { getDict } from '../locales';

const dict = getDict();
const svgStyle = {
  width: 22
};

export const getMenu = locale => {
  return [
    {
      id: 'guide',
      name: locale.common.guide,
      icon: <Icon icon={guide} svgStyle={svgStyle} size="3x" />,
      children: [
        {
          id: 'introduction',
          name: locale.common.introduction
        },
        {
          id: 'usage',
          name: locale.common.usage
        },
        {
          id: 'use-with-create-react-app',
          name: locale.common.useWithCreateReactApp
        },
        {
          id: 'themes',
          name: locale.common.customizeTheme
        },
        {
          id: 'intl',
          name: locale.common.intl
        },
        {
          id: 'logs',
          name: locale.common.changeLog,
          target: '_blank',
          url: 'https://github.com/rsuite/rsuite/releases'
        }
      ]
    },
    {
      id: 'components',
      name: locale.common.components,
      icon: <Icon icon={component} svgStyle={svgStyle} size="3x" />,
      children: components
    },
    {
      id: 'tools',
      name: locale.common.tools,
      icon: <Icon icon={tools} svgStyle={svgStyle} />,
      children: [
        {
          id: 'palette',
          name: locale.common.palette
        },
        {
          id: 'icons',
          name: locale.common.icons
        }
      ]
    }
  ];
};

export default getMenu(dict);
