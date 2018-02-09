# Toggle 开关 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/toggle/index.md)

开关选择器，用于两个值之间的选择。

`<Toggle>` 开关组件


## 演示

<!--{demo}-->



## Props

### `<Toggle>`

| 属性名称              | 类型                     | 默认值      | 描述  |            |
|-------------------|------------------------|----------|-----|------------|
| checked           | boolean                |          |     | 指定当前是否选中   |
| defaultChecked    | boolean                |          |     | 初始是否选中     |
| disabled          | boolean                |          |     | 禁用         |
| checkedChildren   | node                   |          |     | 选中显示的内容    |
| unCheckedChildren | node                   |          |     | 非选中显示的内容   |
| classPrefix       | string                 | 'toggle' |     | class 前缀   |
| size              | enum: 'lg', 'md', 'sm' |          |     | 开关尺寸       |
| onChange          | function               |          |     | 状态改变时的回调函数 |

