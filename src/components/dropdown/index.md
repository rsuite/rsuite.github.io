# Dropdown 下拉菜单

下拉菜单是一种导航，如果需要选择值请使用 SelectPicker。

* `<Dropdown>` 下拉菜单。
* `<Dropdown.Item>` 下拉菜单选项。
* `<Dropdown.Menu>` 下拉菜单中创建只菜单。

## 获取组件

```js
import { Dropdown } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Dropdown>`

| 属性名称        | 类型 `(默认值)`                                           | 描述                                             |
| --------------- | --------------------------------------------------------- | ------------------------------------------------ |
| activeKey       | any                                                       | 激活状态的选项，对应 Dropdown.Item 中的 eventKey |
| classPrefix     | string `('dropdown')`                                     | 组件 CSS 类的前缀                                   |
| disabled        | boolean                                                   | 禁用组件                                         |
| dropup          | boolean                                                   | 菜单向上弹出                                     |
| menuStyle       | Object                                                    | 菜单样式                                         |
| title           | React.Node                                                | 菜单默认显示内容                                 |
| toggleClassName | string                                                    | 设置 Toggle 的 className                         |
| onClose         | () => void                                                | 菜单关闭的回调函数                               |
| onOpen          | () => void                                                | 菜单弹出的回调函数                               |
| onToggle        | (open?: boolean) => void                                  | 菜单状态切换的回调函数                           |
| onSelect        | (eventKey: any, event: SyntheticEvent&lt;any&gt;) => void | 选择后的回调函数                                 |
| renderTitle     | (children?: React.Node) => React.Node                     | 自定义 title                                     |
| placement       | enum: [Placement](#Placement)`('bottomLeft')`             | 菜单显示位置                                     |
| icon            | React.Element&lt;typeof Icon&gt;                          | 设置图标                                         |
| trigger         | union: [Trigger](#Trigger) `('click')`                    | 触发事件                                         |

### `<Dropdown.Item>`

| 属性名称       | 类型 `(默认值)`                                           | 描述                   |
| -------------- | --------------------------------------------------------- | ---------------------- |
| classPrefix    | string `('dropdown-item')`                                |
| children \*    | React.Node                                                | 组件内容               |
| divider        | boolean                                                   | 显示为分割线           |
| panel          | boolean                                                   | 显示一个自定义的面板   |
| active         | boolean                                                   | 选中当前选项           |
| disabled       | boolean                                                   | 禁用当前选项           |
| eventKey       | any                                                       | 当前选项的值           |
| onSelect       | (eventKey: any, event: SyntheticEvent&lt;any&gt;) => void | 选中当前选项的回调函数 |
| componentClass | React.ElementType                                         | 为组件自定义元素类型   |
| icon           | React.Element&lt;typeof Icon&gt;                          | 设置图标               |

### `<Dropdown.Menu>`

| 属性名称 | 类型                             | 描述                             |
| -------- | -------------------------------- | -------------------------------- |
| title    | string                           | 作为子菜单定义标题               |
| pullLeft | boolean                          | 子菜单从左侧展开，默认为右侧展开 |
| icon     | React.Element&lt;typeof Icon&gt; | 设置图标                         |

## Types

### Placement

```js
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```

### Trigger

```js
type Trigger = 'click' | 'hover' | 'contextMenu' | Array<'click' | 'hover' | 'contextMenu'>;
```
