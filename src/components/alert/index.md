# Alert 提醒框

用于页面中操作交互后的全局提示信息，悬浮在页面顶部的中间。

* `Alert.info` 信息提醒。
* `Alert.success` 成功信息提醒。
* `Alert.warning` 警告信息提醒。
* `Alert.error` 错误信息提醒。



## 获取组件

```js
import { Alert } from 'rsuite';
```

## 演示

<!--{demo}-->

## Methods

### `Alert.info`

```
Alert.info(content: string, duration?: number, onClose?: () => void);
```

### `Alert.success`

```
Alert.success(content: string, duration?: number, onClose?: () => void);
```

### `Alert.warning`

```
Alert.warning(content: string, duration?: number, onClose?: () => void);
```

### `Alert.error`

```
Alert.error(content: string, duration?: number, onClose?: () => void);
```

_参数说明_

| 属性名称 | 类型`(默认值)`  | 描述                                              |
| -------- | --------------- | ------------------------------------------------- |
| content  | string          | 信息内容                                          |
| duration | number `(2000)` | 显示的时长，超过时长后自定关闭提醒框（单位:毫秒） |
| onClose  | ()=>void        | 隐藏提醒框后的回调函数                            |

### `Alert.config`

全局配置

```
Alert.config(options:Options);
```

## Types

### Options

```typescript
type Options = {
  top: number;
  duration: number;
  getContainer: () => React.Element;
};
```

* top - 距离页面顶部的距离 (单位 px, 默认:5)
* duration - Alert 框持续时间 (默认:2000，单位: 毫秒)
* getContainer - Alert 框的父级容器

## 相关组件

* [`<Popover>`](./popover) 弹出框
* [`<Tooltip>`](./tooltip) 文字提示
* [`<Message>`](./message) 消息框
* [`<Notification>`](./notification) 通知框
