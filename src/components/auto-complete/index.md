# AutoComplete 自动完成 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/auto-complete/index.md)

## 获取组件

```js
import { AutoComplete } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<AutoComplete>`

| 属性名称     | 类型`(默认值)`                               | 描述                         |
| ------------ | -------------------------------------------- | ---------------------------- |
| classPrefix  | string `('auto-complete')`                   | className 前缀               |
| data         | Array<string>                                | 组件数据                     |
| disabled     | boolean                                      | 禁用组件                     |
| value        | string                                       | 设置值 `受控`                |
| defaultValue | string                                       | 设置默认值 `非受控`          |
| onChange     | (value:string, event)=>void                  | `value` 发生改变时的回调函数 |
| onSelect     | (value:string, event)=>void                  | 选项被点击选择后的回调函数   |
| placeholder  | React.Node                                   | 占位符                       |
| renderItem   | (label:React.Node, item: Object)=>React.Node | 自定义被选中的选项           |
