# Breadcrumb 面包屑[<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/breadcrumb/index.md)

用于显示当前页面路径，并能快速返回到历史页面。

* `<Breadcrumb>` 面包屑组件。
* `<Breadcrumb.Item>` 面包屑选项组件。

## 获取组件

```js
import { Breadcrumb } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Breadcrumb>`

| 属性名称    | 类型 `(默认值)`                                        | 描述           |
| ----------- | ------------------------------------------------------ | -------------- |
| separator   | React.Node `(<i className="icon icon-angle-right" />)` | 分隔符         |
| classPrefix | string `('breadcrumb')`                                | className 前缀 |

### `<Breadcrumb.Item>`

| 属性名称       | 类型 `(默认值)`            | 描述                 |
| -------------- | -------------------------- | -------------------- |
| active         | boolean                    | 激活状态             |
| componentClass | React.ElementType `('ol')` | 为组件自定义元素类型 |
