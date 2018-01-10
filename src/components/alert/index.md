# Alert 提示框 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/alert/index.md)

用于页面中操作交互后的全局提示信息，悬浮在页面顶部的中间。

- `Alert.info` 信息提醒。
- `Alert.success` 成功信息提醒。
- `Alert.warning` 警告信息提醒。
- `Alert.error` 错误信息提醒。

## 演示

<!--{demo}-->

## API

### `Alert.info`

```js
Alert.info(content:string, duration:number, onClose:()=>void)
```

### `Alert.success`

```js
Alert.success(content:string, duration:number, onClose:()=>void)
```

### `Alert.warning`

```js
Alert.warning(content:string, duration:number, onClose:()=>void)
```


### `Alert.error`

```js
Alert.error(content:string, duration:number, onClose:()=>void)
```

_参数说明_

| 属性名称 | 类型`(默认值)`  | 描述                                              |
| -------- | --------------- | ------------------------------------------------- |
| content  | string          | 信息内容                                          |
| duration | number `(1500)` | 显示的时长，超过时长后自定关闭提示框（单位:毫秒） |
| onClose  | ()=>void        | 隐藏提示框后的回调函数                            |


### `Alert.config`

全局配置

```typescript

type Options = {
  top: number,
  duration: number,
  getContainer: ()=> React.Element
};

Alert.config(options:Options);

```

- top - 距离页面顶部的距离 (单位px, 默认:5)
- duration - Alert 框持续时间 (单位毫秒, 默认:2000)
- getContainer - Alert 框的父级容器


## 相关组件

- [`<Message>`](/components/message) 消息框。
- [`<Notification>`](/components/notification) 通知。