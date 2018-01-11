import React from 'react';
import { Icon, IconButton, Button } from '../rsuiteSource';
import { guide, component, tools } from './SvgIcons';

const svgStyle = {
  width: 22
};

export default [{
  id: 'getting-started',
  name: '新手指南',
  icon: (<Icon icon={guide} svgStyle={svgStyle} size="3x" />),
  children: [
    {
      id: 'installation',
      name: '安装'
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
      id: 'supported-platforms',
      name: '支持平台'
    },
    {
      id: 'logs',
      name: '更新日志'
    }
  ]
}, {
  id: 'components',
  name: '组件',
  icon: (<Icon icon={component} svgStyle={svgStyle} size="3x" />),
  children: [{
    id: 'overview',
    name: 'Overview',
    title: '目录'
  }, {
    id: 'alert',
    name: 'Alert *',
    title: '提示框'
  }, {
    id: 'button',
    name: 'Button *',
    title: '按钮'
  }, {
    id: 'breadcrumb',
    name: 'Breadcrumb *',
    title: '面包屑'
  }, {
    id: 'checkbox',
    name: 'Checkbox *',
    title: '复选框'
  }, {
    id: 'check-tree',
    name: 'CheckTree',
    title: '多选树形控件'
  }, {
    id: 'check-tree-picker',
    name: 'CheckTreePicker',
    title: '树形多项选择器'
  }, {
    id: 'check-picker',
    name: 'CheckPicker',
    title: '多项选择器'
  },
  {
    id: 'cascader',
    name: 'Cascader',
    title: '级联选择器'
  }, {
    id: 'dropdown',
    name: 'Dropdown *',
    title: '下拉菜单'
  }, {
    id: 'drawer',
    name: 'Drawer *',
    title: '抽屉'
  }, {
    id: 'date-picker',
    name: 'DatePicker',
    title: '时间选择器'
  },
  {
    id: 'date-range-picker',
    name: 'DateRangePicker',
    title: '日期范围选择器'
  }, {
    id: 'form',
    name: 'Form *',
    title: '表单控件'
  }, {
    id: 'grid',
    name: 'Grid *',
    title: '网格'
  }, {
    id: 'icon',
    name: 'Icon *',
    title: '图标'
  }, {
    id: 'loader',
    name: 'Loader *',
    title: '加载器'
  }, {
    id: 'modal',
    name: 'Modal *',
    title: '模态窗口'
  }, {
    id: 'message',
    name: 'Message *',
    title: '消息框'
  }, {
    id: 'nav',
    name: 'Nav *',
    title: '导航'
  }, {
    id: 'navbar',
    name: 'Navbar *',
    title: '导航栏'
  }, {
    id: 'nav-menu',
    name: 'NavMenu *',
    title: '菜单'
  }, {
    id: 'notification',
    name: 'Notification *',
    title: '信息通知框'
  }, {
    id: 'popover',
    name: 'Popover *',
    title: '提示框'
  }, {
    id: 'pagination',
    name: 'Pagination *',
    title: '分页'
  }, {
    id: 'panel',
    name: 'Panel *',
    title: '面板'
  }, {
    id: 'progress',
    name: 'Progress *',
    title: '进度条'
  }, {
    id: 'radio',
    name: 'Radio *',
    title: '单选框'
  }, {
    id: 'steps',
    name: 'Steps',
    title: '步骤条'
  }, {
    id: 'select-picker',
    name: 'SelectPicker',
    title: '单项选择器'
  },
  {
    id: 'toggle',
    name: 'Toggle *',
    title: '开关'
  }, {
    id: 'tooltip',
    name: 'Tooltip *',
    title: '文字提示'
  }, {
    id: 'table',
    name: 'Table *',
    title: '表格'
  },
  {
    id: 'tree',
    name: 'Tree',
    title: '树形控件'
  },
  {
    id: 'tree-picker',
    name: 'TreePicker',
    title: '树形单项选择器'
  }, {
    id: 'uploader',
    name: 'Uploader',
    title: '上传控件'
  }]
}, {
  id: 'tools',
  name: '工具',
  icon: (<Icon icon={tools} svgStyle={svgStyle} />),
  children: [{
    id: 'palette',
    name: '调色盘'
  }, {
    id: 'icons',
    name: '图标库'
  }]
}];
