import React from 'react';
import { IconFont } from 'rsuite';
import Plug from './Plug';

export default [{
  id: 'getting-started',
  name: '新手入门',
  icon: (<IconFont icon="book2" />),
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
  name: 'Components',
  icon: (<Plug width={22} height={17} />),
  children: [
    {
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
      title: '可选择树形控件'
    }, {
      id: 'check-tree-picker',
      name: 'CheckTreePicker',
      title: '树形多项选择器'
    }, {
      id: 'check-picker',
      name: 'CheckPicker',
      title: '多选'
    },
    {
      id: 'cascader',
      name: 'CascaderPicker',
      title: '级联选择'
    }, {
      id: 'dropdown',
      name: 'Dropdown *',
      title: '下拉按钮'
    }, {
      id: 'date-picker',
      name: 'DatePicker',
      title: '日期选择控件'
    },
    {
      id: 'date-range-picker',
      name: 'DateRangePicker',
      title: '日期范围选择控件'
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
      id: 'modal',
      name: 'Modal *',
      title: '模态窗口'
    }, {
      id: 'nav',
      name: 'Nav *',
      title: '导航'
    }, {
      id: 'navbar',
      name: 'Navbar *',
      title: '导航栏'
    }, {
      id: 'popover',
      name: 'Popover *',
      title: '气泡提示框'
    }, {
      id: 'pagination',
      name: 'Pagination *',
      title: '分页'
    }, {
      id: 'panel',
      name: 'Panel *',
      title: '面板'
    }, {
      id: 'radio',
      name: 'Radio *',
      title: '单选框'
    }, {
      id: 'select-picker',
      name: 'SelectPicker',
      title: '单选'
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
      title: '表格',
      alone: true
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
      title: '上传文件'
    }
  ]
}
];
