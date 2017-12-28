# Notification [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/notification/index.md)


- `Notification.open` 默认通知。
- `Notification.info` 信息通知。
- `Notification.success` 成功信息通知。
- `Notification.warning` 警告信息通知。
- `Notification.error` 错误信息通知。


## 演示

<!--{demo}-->

## API


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


### `Notification.open`

```js
Notification.open(config:Config)
```

### `Notification.info`

```js
Notification.info(config:Config)
```

### `Notification.success`

```js
Notification.success(config:Config)
```

### `Notification.warning`

```js
Notification.warning(config:Config)
```


### `Notification.error`

```js
Notification.error(config:Config)
```


### type Config
| Name            | Type                                                  | Default    | Description                |
|-----------------|-------------------------------------------------------|------------|----------------------------|
| title（必选）       | string                                                |            | 标题                         |
| description（必选） | React.ElementType                                     | 1.5        | 描述                         |
| duration        | number                                                | 4.5        | 消息框持续时间                    |
| placement       | union:'topLeft','topRight','bottomLeft','bottomRight' | 'topRight' | 消息框的位置，共有四种位置              |
| top             | number                                                | 24         | 消息框距离顶部的距离                 |
| bottom          | number                                                | 24         | 消息框距离底部的距离                 |
| onClose         | ()=>void                                              |            | 关闭回调函数                     |
| style           | Object                                                |            | 自定义样式                      |
| key             | string                                                |            | 消息框唯一标识，如果要手动移除消息框，必须填写该字段 |


### `Notification.remove`

手动移除消息框

```js

Notification.open({
  title:'Title',
  description:'Message',
  key:'myNotification'
});

Notification.remove('myNotification');
```