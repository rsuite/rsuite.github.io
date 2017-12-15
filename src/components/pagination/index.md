
# Buttons [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/pagination/index.md)

`<Pagination>` 分页器组件


## 演示

<!--{demo}-->

## API

### `<Pagination>`

| 属性名称                 | 类型          | 默认值            | 描述                 |
|----------------------|-------------|----------------|--------------------|
| activePage           | number      | 1              | 当前页码               |
| pages                | number      | 1              | 页数                 |
| maxButtons           | number      |                | 分页按钮最多显示数          |
| first                | boolean     |                | 显示第一页              |
| last                 | boolean     |                | 显示最后一页             |
| prev                 | boolean     |                | 显示上一页              |
| next                 | boolean     |                | 显示下一页              |
| ellipsis             | boolean     |                | 显示省略符              |
| boundaryLinks        | boolean     |                | 显示边界分页按钮 1 和 pages |
| buttonComponentClass | React.ElementType | SafeAnchor     |                    |
| classPrefix          | string      | `'pagination'` |                    |
