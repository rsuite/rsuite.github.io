# AutoComplete 自动完成

## 获取组件

```js
import { AutoComplete } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<AutoComplete>`

| 属性名称      | 类型`(默认值)`                                     | 描述                         |
| ------------- | -------------------------------------------------- | ---------------------------- |
| classPrefix   | string `('auto-complete')`                         | 组件 CSS 类的前缀               |
| data \*       | Array&lt;[DataItemType](#DataItemType)&gt;         | 组件数据                     |
| disabled      | boolean                                            | 禁用组件                     |
| value         | DataItemType.value                                 | 设置值 `受控`                |
| defaultValue  | DataItemType.value                                 | 设置默认值 `非受控`          |
| onChange      | (value:DataItemType.value, event)=>void            | `value` 发生改变时的回调函数 |
| onSelect      | (value:DataItemType, event)=>void                  | 选项被点击选择后的回调函数   |
| placeholder   | React.Node                                         | 占位符                       |
| renderItem    | (label:React.Node, item: DataItemType)=>React.Node | 自定义被选中的选项           |
| menuClassName | string                                             | 选项菜单的 className         |

## Types

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
