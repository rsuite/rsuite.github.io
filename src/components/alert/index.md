# Alert [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/alert/index.md)


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

| Name        | Type     | Default | Description |
|-------------|----------|---------|-------------|
| content（必选） | string   |         | 通知内容        |
| duration    | number   | 1.5     | 消息框持续时间     |
| onClose     | ()=>void |         | 关闭回调函数      |


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
