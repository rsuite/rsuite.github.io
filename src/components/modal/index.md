# Modal 模态框 [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/modal/index.md)

一套模态对话框组件，用于消息提示、确认消息和提交内容。 如果需要放置更多内容可以使用 Drawer。

模态框，包含下面组件:

* `<Modal.Header>`
* `<Modal.Title>`
* `<Modal.Body>`
* `<Modal.Footer>`

## 获取组件

```js
import { Modal } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Modal>`

| 属性名称             | 类型 `(默认值)`                     | 描述                                                                                                 |
| -------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| autoFocus            | boolean `(true)`                    | 当设置为 true, Modal 被打开是自动焦点移到其自身,辅助屏幕阅读器容易访问                               |
| backdrop             | unions: boolean, 'static'           | 当设置为 true，Modal 打开时会显示背景，点击背景会关闭 Modal，如果不想关闭 Modal，可以设置为 'static' |
| backdropClassName    | string                              | 为背景设置一个自定义 className                                                                       |
| classPrefix          | string `('modal')`                  | className 前缀                                                                                       |
| dialogComponentClass | React.ElementType `(ModalDialog)`   | 自定义 Dialog 组件                                                                                   |
| dialogClassName      | string                              | Dialog className                                                                                     |
| enforceFocus         | boolean `(true)`                    | 当设置为 true, Modal 将防止焦点在打开时离开,辅助屏幕阅读器容易访问                                   |
| full                 | boolean                             | 撑满全屏                                                                                             |
| keyboard             | boolean `(true)`                    | 按下 esc 键时关闭 Modal                                                                              |
| overflow             | boolean `(true)`                    | body 内容过长时自动设置高度                                                                          |
| onShow               | () => void                          | 显示时的回调函数                                                                                     |
| onHide               | () => void                          | 隐藏时的回调函数                                                                                     |
| onEnter              | () => void                          | 显示前动画过渡的回调函数                                                                             |
| onEntering           | () => void                          | 显示中动画过渡的回调函数                                                                             |
| onEntered            | () => void                          | 显示后动画过渡的回调函数                                                                             |
| onExit               | () => void                          | 退出前动画过渡的回调函数                                                                             |
| onExiting            | () => void                          | 退中前动画过渡的回调函数                                                                             |
| onExited             | () => void                          | 退后前动画过渡的回调函数                                                                             |
| show                 | boolean                             | 显示 Modal                                                                                           |
| size                 | enum: 'lg', 'md', 'sm', 'xs' `(sm)` | Modal 尺寸                                                                                           |

### `<Modal.Header>`

| 属性名称    | 类型 `(默认值 )`                    | 描述                        |
| ----------- | ----------------------------------- | --------------------------- |
| classPrefix | string `('modal-header')`           | className 前缀              |
| closeButton | boolean `(true)`                    | 当设置为 true, 显示关闭按钮 |
| onHide      | (event: SyntheticEvent<\*>) => void | 点击关闭按钮的回调函数      |

### `<Modal.Title>`

| 属性名称    | 类型 `(默认值)`          | 描述           |
| ----------- | ------------------------ | -------------- |
| classPrefix | string `('modal-title')` | className 前缀 |

### `<Modal.Footer>`

| 属性名称    | 类型 `(默认值)`           | 描述           |
| ----------- | ------------------------- | -------------- |
| classPrefix | string `('modal-footer')` | className 前缀 |

### `<Modal.Body>`

| 属性名称    | 类型 `(默认值)`         | 描述           |
| ----------- | ----------------------- | -------------- |
| classPrefix | string `('modal-body')` | className 前缀 |
