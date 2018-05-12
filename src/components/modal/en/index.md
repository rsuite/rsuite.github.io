# Modal

A modal dialog box component for message prompts, acknowledgement messages, and submissions. You can use Drawer if you need to place more content.

Modal box containing the following components:

* `<Modal.Header>`
* `<Modal.Title>`
* `<Modal.Body>`
* `<Modal.Footer>`

## Usage

```js
import { Modal } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Modal>`

| Property             | Type `(Default)`                    | Description                                                                                                                                                                               |
| -------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFocus            | boolean `(true)`                    | When set to true, the Modal is opened and is automatically focused on its own, accessible to screen readers                                                                               |
| backdrop             | unions: boolean, 'static'           | When set to true, the Modal will display the background when it is opened. Clicking on the background will close the Modal. If you do not want to close the Modal, set it to 'static'.    |
| backdropClassName    | string                              | Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".                                                            |
| classPrefix          | string `('modal')`                  | The prefix of the component CSS class                                                                                                                                                     |
| dialogComponentClass | React.ElementType `(ModalDialog)`   | You can use a custom element type for Dialog                                                                                                                                              |
| dialogClassName      | string                              | CSS class applied to Dialog DOM nodes.                                                                                                                                                    |
| enforceFocus         | boolean `(true)`                    | When set to true, Modal will prevent the focus from leaving when opened, making it easier for the secondary screen reader to access                                                       |
| full                 | boolean                             | Full screen                                                                                                                                                                               |
| keyboard             | boolean `(true)`                    | Close Modal when `esc` key is pressed.                                                                                                                                                    |
| overflow             | boolean `(true)`                    | Automatically sets the height when the body content is too long.                                                                                                                          |
| onShow               | () => void                          | Callback fired when Modal display                                                                                                                                                        |
| onHide               | () => void                          | Callback fired when Modal hide                                                                                                                                                        |
| onEnter              | () => void                          | Callback fired before the Modal transitions in                                                                                                                                           |
| onEntering           | () => void                          | Callback fired as the Modal begins to transition in                                                                                                                                      |
| onEntered            | () => void                          | Callback fired after the Modal finishes transitioning in                                                                                                                                 |
| onExit               | () => void                          | Callback fired right before the Modal transitions out                                                                                                                                    |
| onExiting            | () => void                          | Callback fired as the Modal begins to transition out                                                                                                                                     |
| onExited             | () => void                          | Callback fired after the Modal finishes transitioning out                                                                                                                                |
| show \*              | boolean                             | Show Modal                                                                                                                                                                               |
| size                 | enum: 'lg', 'md', 'sm', 'xs'        | Set Modal size                                                                                                                                                                           |

### `<Modal.Header>`

| 属性名称    | 类型 `(默认值 )`                           | 描述                        |
| ----------- | ------------------------------------------ | --------------------------- |
| classPrefix | string `('modal-header')`                  | 组件 CSS 类的前缀           |
| closeButton | boolean `(true)`                           | 当设置为 true, 显示关闭按钮 |
| onHide      | (event: SyntheticEvent&lt;any&gt;) => void | 点击关闭按钮的回调函数      |

### `<Modal.Title>`

| 属性名称    | 类型 `(默认值)`          | 描述              |
| ----------- | ------------------------ | ----------------- |
| classPrefix | string `('modal-title')` | 组件 CSS 类的前缀 |

### `<Modal.Footer>`

| 属性名称    | 类型 `(默认值)`           | 描述              |
| ----------- | ------------------------- | ----------------- |
| classPrefix | string `('modal-footer')` | 组件 CSS 类的前缀 |

### `<Modal.Body>`

| 属性名称    | 类型 `(默认值)`         | 描述              |
| ----------- | ----------------------- | ----------------- |
| classPrefix | string `('modal-body')` | 组件 CSS 类的前缀 |
