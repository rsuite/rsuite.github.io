# Modal [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/modals/index.md)
模态框对话框。包含下面组件：
* `<Modal.Header>`
* `<Modal.Title>`
*  `<Modal.Body>`
* `<Modal.Footer>`

## 演示

<!--{demo}-->

## API

### `<Modal>`

属性名称                 | 类型                            | 默认值         | 描述
-------------------- | ----------------------------- | ----------- | ------
animation            | boolean                       | true        | `show` 或 `hide` 的时候有个渐变的动画
autoResizeHeight     | boolean                       | true        | body 内容过长时自动设置高度
autoFocus            | boolean                       |             |
backdrop             | one of: `static`, true, false |             |
classPrefix          | string                        | `modal`     |
dialogComponentClass | elementType                   | ModalDialog |
dialogClassName      | string                        |             |
enforceFocus         | boolean                       |             |
keyboard             | boolean                       |             |
onHide               | function                      |             |
onEnter              | function                      |             |
onEntering           | function                      |             |
onEntered            | function                      |             |
onExit               | function                      |             |
onExiting            | function                      |             |
onExited             | function                      |             |
show                 | boolean                       |             |
size                 | one of: `lg`, `sm`            |             |
