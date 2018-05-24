import React from 'react';
import { Icon, IconButton, Button } from 'rsuite';
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
      name: _.get(locale, 'common.guide'),
      icon: <Icon icon={guide} svgStyle={svgStyle} size="3x" />,
      children: [
        {
          id: 'introduction',
          name: _.get(locale, 'common.introduction')
        },
        {
          id: 'usage',
          name: _.get(locale, 'common.usage')
        },
        {
          id: 'use-with-create-react-app',
          name: _.get(locale, 'common.useWithCreateReactApp')
        },
        {
          id: 'themes',
          name: _.get(locale, 'common.customizeTheme')
        },
        {
          id: 'intl',
          name: _.get(locale, 'common.intl')
        },
        {
          id: 'logs',
          name: _.get(locale, 'common.changeLog'),
          target: '_blank',
          url: 'https://github.com/rsuite/rsuite/releases'
        }
      ]
    },
    {
      id: 'components',
      name: _.get(locale, 'common.components'),
      icon: <Icon icon={component} svgStyle={svgStyle} size="3x" />,
      children: components
    },
    {
      id: 'tools',
      name: _.get(locale, 'common.tools'),
      icon: <Icon icon={tools} svgStyle={svgStyle} />,
      children: [
        {
          id: 'palette',
          name: _.get(locale, 'common.palette')
        },
        {
          id: 'icons',
          name: _.get(locale, 'common.icons')
        }
      ]
    }
  ];
};

export default getMenu(dict);
