import React from 'react';
import _ from 'lodash';
import { Icon } from 'rsuite';
import { guide, component, tools, extension } from '@/components/SvgIcons';
import components from '@/component.config.json';
import { getDict } from '@/locales';

const dict = getDict();
const svgStyle = {
  width: 22
};

const getMenu = locale => {
  return [
    {
      id: 'guide',
      name: _.get(locale, 'common.guide'),
      icon: <Icon icon={guide} svgStyle={svgStyle} size="lg" />,
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
          id: 'use-next-app',
          name: _.get(locale, 'common.useNextApp')
        },

        {
          id: 'modularized',
          name: _.get(locale, 'common.modularized')
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
          id: 'html-elements',
          name: _.get(locale, 'common.htmlElements')
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
      icon: <Icon icon={component} svgStyle={svgStyle} size="lg" />,
      children: components
    },
    {
      id: 'tools',
      name: _.get(locale, 'common.tools'),
      icon: <Icon icon={tools} svgStyle={svgStyle} size="lg" />,
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
    },
    {
      id: 'extensions',
      icon: <Icon icon={extension} svgStyle={svgStyle} size="lg" />,
      name: _.get(locale, 'common.extension')
    }
  ];
};

export const menu = getMenu(dict);

export default getMenu;
