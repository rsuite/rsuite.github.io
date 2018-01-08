# Modal [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/modal/index.md)
模态框对话框。包含下面组件：
* `<Modal.Header>`
* `<Modal.Title>`
*  `<Modal.Body>`
* `<Modal.Footer>`

## 演示

<!--{demo}-->

## API

### `<Modal>`

| 属性名称                 | 类型                        | 默认值           | 描述                                                                 |
|----------------------|---------------------------|---------------|--------------------------------------------------------------------|
| overflow             | boolean                   | true          | body 内容过长时自动设置高度。                                                  |
| backdrop             | unions: boolean, 'static' |               | 当设置为 true，Modal 打开时会显示背景，点击背景会关闭 Modal，如果不想关闭 Modal，可以设置为 'static' |
| classPrefix          | string                    | 'modal'       | className 前缀                                                       |
| dialogComponentClass | React.ElementType         | `ModalDialog` |                                                                    |
| dialogClassName      | string                    |               |                                                                    |
| autoFocus            | boolean                   | true          | 当设置为 true, Modal 被打开是自动焦点移到其自身,辅助屏幕阅读器容易访问。                        |
| enforceFocus         | boolean                   | true          | 当设置为 true, Modal 将防止焦点在打开时离开,辅助屏幕阅读器容易访问。                          |
| keyboard             | boolean                   |               | 按下 esc 键时关闭 Modal。                                                 |
|                      |                           |               |                                                                    |
| onEnter              | function                  |               |                                                                    |
| onEntering           | function                  |               |                                                                    |
| onEntered            | function                  |               |                                                                    |
| onExit               | function                  |               |                                                                    |
| onExiting            | function                  |               |                                                                    |
| onExited             | function                  |               |                                                                    |
| onHide               | function                  |               |                                                                    |
