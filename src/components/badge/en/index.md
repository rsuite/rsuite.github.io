# Badge

## Usage

```js
import { Badge } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Badge>`

| 属性名称    | 类型`(默认值)`           | 描述                                            |
| ----------- | ------------------------ | ----------------------------------------------- |
| classPrefix | string `('badge')`       | 组件 CSS 类的前缀                               |
| children    | React.Node               | 包裹的组件                                      |
| content \*  | string,number,React.Node | 内容，可以是数字、文字                          |
| maxCount    | number`99`               | 最大计数（仅当 `content` 为 number 类型时有效） |
