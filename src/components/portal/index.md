# Portal 入口 [<i class="rs-icon rs-icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/portal/index.md)

`<Portal>` 组件的将子级组件将追加到指定的容器中，功能类似 React 16 中的 `ReactDOM.createPortal()`, 但是 `Portal` 组件支持 React 16 之前的版本。

## 获取组件

```js
import { Portal } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Portal>`

| 属性名称   | 类型 `(默认值)`               | 描述             |
| ---------- | ----------------------------- | ---------------- |
| container  | HTMLElement,() => HTMLElement | 现在子组件的容器 |
| onRendered | ()=>void                      | 渲染后的回调函数 |
| children   | React.Node                    | 子组件           |
