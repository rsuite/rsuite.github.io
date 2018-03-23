# DOMHelper DOM 助手[<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/dom-helper/index.md)

在 React 项目中，我们不推荐直接操作 DOM ， 如果必须要用到操作 DOM ,我们提供了一组操作的方法。

<!--{demo}-->

### Query 查询

```typescript
activeElement: () => HTMLElement;
getHeight: (node: HTMLElement, client: HTMLElement) => number;
getWidth: (node: HTMLElement, client: HTMLElement) => number;
getOffset: (node: HTMLElement) => Object;
getOffsetParent: (node: HTMLElement) => Object;
getPosition: (node: HTMLElement, offsetParent) => Object;
getWindow: (node: HTMLElement) => String;
nodeName: (node: HTMLElement) => String;
ownerDocument: (node: HTMLElement) => Object;
ownerWindow: (node: HTMLElement) => Object;
contains: (context: HTMLElement, node: HTMLElement) => boolean;
```

### DOMMouseMoveTracker

鼠标拖拽跟踪器

```typescript
new DOMMouseMoveTracker(
  onMove:(deltaX: number, deltaY: number, moveEvent: Object) => void,
  onMoveEnd:() => void,
  node: HTMLElement
);
```

### WheelHandler

滚轮滑动处理器

```typescript
new WheelHandler(
  onWheel: (deltaX: number, deltaY: number) => void,
  shouldHandleWheelX: (delta: number) => boolean,
  shouldHandleWheelY: (delta: number) => boolean
);
```
