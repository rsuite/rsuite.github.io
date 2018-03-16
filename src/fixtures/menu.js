import React from 'react';
import { Icon, IconButton, Button } from '../rsuiteSource';
import { guide, component, tools } from './SvgIcons';

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
        id: 'example-projects',
        name: '示例项目'
      },
      {
        id: 'intl',
        name: '国际化'
      },
      {
        id: 'supported-platforms',
        name: '支持平台'
      },
      {
        id: 'logs',
        name: '更新日志'
      }
    ]
  },
  {
    id: 'components',
    name: '组件',
    icon: <Icon icon={component} svgStyle={svgStyle} size="3x" />,
    children: [
      {
        id: 'overview',
        name: 'Overview',
        title: '概览'
      },
      {
        group: true,
        id: 'general',
        name: 'General',
        title: '常规'
      },
      {
        id: 'button',
        name: 'Button',
        title: '按钮',
        components: ['Button', 'ButtonGroup', 'IconButton']
      },
      {
        id: 'icon',
        name: 'Icon',
        title: '图标',
        components: ['Icon']
      },
      {
        id: 'tooltip',
        name: 'Tooltip',
        title: '文字提示',
        components: ['Tooltip', 'Whisper']
      },
      {
        id: 'popover',
        name: 'Popover',
        title: '提示框',
        components: ['Popover', 'Whisper']
      },
      {
        id: 'alert',
        name: 'Alert',
        title: '提示框',
        components: ['Alert']
      },
      {
        id: 'notification',
        name: 'Notification',
        title: '信息通知框',
        components: ['Notification']
      },
      {
        id: 'message',
        name: 'Message',
        title: '消息框',
        components: ['Message']
      },
      {
        id: 'loader',
        name: 'Loader',
        title: '加载器',
        components: ['Loader']
      },
      {
        id: 'modal',
        name: 'Modal',
        title: '模态窗口',
        components: ['Modal', 'Modal.Header', 'Modal.Body', 'Modal.Footer']
      },
      {
        id: 'drawer',
        name: 'Drawer',
        title: '抽屉',
        components: ['Drawer', 'Drawer.Header', 'Drawer.Body', 'Drawer.Footer']
      },
      {
        id: 'divider',
        name: 'Divider',
        title: '分割线',
        components: ['Divider']
      },

      {
        group: true,
        id: 'navigation',
        name: 'Navigation',
        title: '导航'
      },
      {
        id: 'dropdown',
        name: 'Dropdown',
        title: '下拉菜单',
        components: ['Dropdown', 'Dropdown.Item', 'Dropdown.Menu']
      },
      {
        id: 'nav',
        name: 'Nav',
        title: '导航',
        components: ['Nav', 'Nav.Item', 'Nav.Dropdown']
      },
      {
        id: 'navbar',
        name: 'Navbar',
        title: '导航栏',
        components: ['Navbar', 'Navbar.Header', 'Navbar.Brand', 'Navbar.Body']
      },
      {
        id: 'sidenav',
        name: 'Sidenav',
        title: '侧导航',
        components: ['Sidenav', 'Sidenav.Header', 'Sidenav.Body']
      },
      {
        id: 'steps',
        name: 'Steps',
        title: '步骤条',
        components: ['Steps', 'Steps.Item']
      },
      {
        id: 'pagination',
        name: 'Pagination',
        title: '分页',
        components: ['Breadcrumb', 'Breadcrumb.Item']
      },
      {
        id: 'breadcrumb',
        name: 'Breadcrumb',
        title: '面包屑',
        components: ['Pagination']
      },
      {
        id: 'progress',
        name: 'Progress',
        title: '进度条',
        components: ['Progress.Line', 'Progress.Circle']
      },
      {
        group: true,
        id: 'entry',
        name: 'Data Entry',
        title: '数据录入'
      },
      {
        id: 'checkbox',
        name: 'Checkbox',
        title: '复选框',
        components: ['Checkbox', 'CheckboxGroup']
      },
      {
        id: 'radio',
        name: 'Radio',
        title: '单选框',
        components: ['Radio', 'RadioGroup']
      },
      {
        id: 'input',
        name: 'Input',
        title: '输入框',
        components: ['Input', 'InputGroup', 'InputGroup.Button', 'InputGroup.Addon']
      },
      {
        id: 'input-number',
        name: 'InputNumber',
        title: '数字输入框',
        components: ['InputNumber']
      },
      {
        id: 'auto-complete',
        name: 'AutoComplete',
        title: '自动完成控件',
        components: ['AutoComplete']
      },
      {
        id: 'toggle',
        name: 'Toggle',
        title: '开关',
        components: ['Toggle']
      },
      {
        id: 'select-picker',
        name: 'SelectPicker',
        title: '单项选择器',
        components: ['SelectPicker']
      },
      {
        id: 'check-picker',
        name: 'CheckPicker',
        title: '多项选择器',
        components: ['CheckPicker']
      },
      {
        id: 'tree-picker',
        name: 'TreePicker',
        title: '树形单项选择器',
        components: ['TreePicker']
      },
      {
        id: 'check-tree-picker',
        name: 'CheckTreePicker',
        title: '树形多项选择器',
        components: ['CheckTreePicker']
      },
      {
        id: 'cascader',
        name: 'Cascader ',
        title: '级联选择器',
        components: ['Cascader']
      },
      {
        id: 'date-picker',
        name: 'DatePicker ',
        title: '日期选择器',
        components: ['DatePicker']
      },
      {
        id: 'date-range-picker',
        name: 'DateRangePicker',
        title: '日期范围选择器',
        components: ['DateRangePicker']
      },
      {
        id: 'slider',
        name: 'Slider ',
        title: '滑动输入控件',
        components: ['Slider']
      },
      {
        id: 'uploader',
        name: 'Uploader',
        title: '上传控件',
        components: ['Uploader']
      },
      {
        id: 'form',
        name: 'Form',
        title: '表单',
        components: ['Form', 'FormControl', 'FormGroup', 'ControlLabel', 'HelpBlock']
      },
      {
        group: true,
        id: 'display',
        name: 'Data Display',
        title: '数据展示'
      },
      {
        id: 'table',
        name: 'Table',
        title: '表格',
        components: ['Table', 'Table.Column', 'Table.HeaderCell', 'Table.Cell', 'Table.Pagination']
      },
      {
        id: 'tree',
        name: 'Tree',
        title: '树形控件',
        components: ['Tree']
      },
      {
        id: 'check-tree',
        name: 'CheckTree',
        title: '树形多选控件',
        components: ['CheckTree']
      },
      {
        id: 'panel',
        name: 'Panel',
        title: '面板',
        components: ['Panel', 'PanelGroup']
      },
      {
        id: 'timeline',
        name: 'Timeline',
        title: '时间轴',
        components: ['Timeline', 'Timeline.Item']
      },
      {
        id: 'tag',
        name: 'Tag',
        title: '标签',
        components: ['Tag']
      },
      {
        group: true,
        id: 'layout',
        name: 'Layout',
        title: '布局'
      },
      {
        id: 'grid',
        name: 'Grid',
        title: '栅格',
        components: ['Grid', 'Row', 'Col']
      },
      {
        id: 'flexbox-grid',
        name: 'FlexboxGird',
        title: '弹性栅格',
        components: ['FlexboxGird', 'FlexboxGird.Item']
      },
      {
        id: 'container',
        name: 'Container',
        title: '容器布局',
        components: ['Container', 'Header', 'Footer', 'Content', 'Sidebar']
      },
      {
        group: true,
        id: 'utils',
        name: 'Utils',
        title: 'Utils'
      },
      {
        id: 'schema',
        name: 'Schema',
        title: '数据模型',
        apis: ['Schema.Model', 'Schema.Types']
      }
    ]
  },
  {
    id: 'tools',
    name: '工具',
    icon: <Icon icon={tools} svgStyle={svgStyle} />,
    children: [
      {
        id: 'palette',
        name: '调色盘'
      },
      {
        id: 'icons',
        name: '图标库'
      }
    ]
  }
];
