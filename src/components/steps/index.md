# Steps 步骤条 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/steps/index.md)

引导用户按照流程完成任务的导航条。

## 演示

<!--{demo}-->

## API


| Prop name   | Type                           | Default      | Description          |
|-------------|--------------------------------|--------------|----------------------|
| title       | string                         |              | 设置每个步骤的主标题           |
| description | string                         |              | 对每个步骤进行描述            |
| current     | number                         | 0            | 可以更改该属性来改变所在步骤（从0开始） |
| size        | string                         |              | 设置为 small            |
| status      | unico: 'process'                |              | 设置为 error            |
| direction   | enum: 'horizontal','vertical' | 'horizontal' | 设置布局                 |
| icon        | React.Node                     |              | 设置 <Icon> 自定义图标      |
