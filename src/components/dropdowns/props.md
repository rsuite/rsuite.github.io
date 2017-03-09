<hr/>
#### Dropdown

属性名称           | 类型                | 默认值      | 描述
-------------- | ----------------- | -------- | --------------------------------------------------------------------
activeKey      | bool              | false    | 当前选中的 key
block          | bool              | false    | 整行显示
componentClass | object            |          | elementType
disabled       | bool              | false    | 禁用组件
dropup         | bool              | false    | 菜单向上弹出
size           | string            |          | 大小 :`lg` `md` `sm` `xs`
shape          | string            |          | 显示的外形：`default` `primary` `success` `warning` `danger` `info` `link`
select         | bool              | false    | 把菜单当成 `<select>` 使用
bothEnds       | bool              | false    | 让文本和小箭头在两边显示
menuStyle      | bool              | false    | 菜单样式
autoClose      | bool              | ture     | 菜单选择后自动关闭
title          | string or element |          | 菜单默认显示文本
onClose        | func              |          | 菜单关闭的回调函数
onOpen         | func              |          | 菜单弹出的回调函数
onToggle       | func              |          | 菜单状态切换的回调函数
onSelect       | func              |          | 选择后的回调函数

<br/>
#### Dropdown.Item

属性名称           | 类型     | 默认值   | 描述
-------------- | ------ | ----- | -----------
href           | string |       | 点击后跳转的链接
divider        | bool   | false | 显示为分割线
active         | bool   |       | 选中当前选项
disabled       | bool   | false | 禁用当前选项
eventKey       | any    |       | 当前选项的值
onSelect       | func   |       | 选中当前选项的回调函数
onKeyDown      | func   |       | 键盘事件的回调函数
componentClass | object |       | elementType
