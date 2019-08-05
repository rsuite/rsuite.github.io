# Notification 通知框

用于全局通知，悬浮在页面角落。

* `Notification.open` 默认通知。
* `Notification.info` 信息通知。
* `Notification.success` 成功信息通知。
* `Notification.warning` 警告信息通知。
* `Notification.error` 错误信息通知。

## 获取组件

```js
import { Notification } from 'rsuite';
```

## 演示

<!--{demo}-->

## Methods

### `Notification.open`

```
Notification.open(config: Config);
```

### `Notification.info`

```
Notification.info(config: Config);
```

### `Notification.success`

```
Notification.success(config: Config);
```

### `Notification.warning`

```
Notification.warning(config: Config);
```

### `Notification.error`

### `Notification.remove`

```
Notification.remove(key: string);
```

手动移除消息框

```js
Notification.open({
  title: 'Title',
  description: 'Message',
  key: 'myNotification'
});

Notification.remove('myNotification');
```

## Types

### Config

```typescript
type Config{
  title:string,
  description:React.ElementType,
  duration?:number,
  placement?:string,
  top?:number,
  bottom?:number,
  onClose?:()=>void,
  style?:Object,
  key?:string
}
```

| 属性名称       | 类型 `(默认值)`                          | 描述                                                 |
| -------------- | ---------------------------------------- | ---------------------------------------------------- |
| bottom         | number `(24)`                            | 消息框距离底部的距离                                 |
| description \* | React.Node                               | 描述                                                 |
| duration       | number `(4500)`                          | 消息框持续时间 (单位：毫秒)                          |
| key            | string                                   | 消息框唯一标识，如果要手动移除消息框，必须填写该字段 |
| onClose        | ()=>void                                 | 关闭回调函数                                         |
| placement      | enum: [Placement4](#types)`('topRight')` | 消息框的位置                                         |
| style          | React.CSSProperties                      | 自定义样式                                           |
| title \*       | string                                   | 标题                                                 |
| top            | number `(24)`                            | 消息框距离顶部的距离                                 |

## 相关组件

* [`<Popover>`](./popover) 弹出框
* [`<Tooltip>`](./tooltip) 文字提示
* [`<Message>`](./message) 消息框
* [`<Alert`>](./alert) 提醒框
