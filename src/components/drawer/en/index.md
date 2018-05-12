# Drawer

A floating layer that slides out from the edge of the page can be used instead of Modal to put more content.

## Usage

```js
import { Drawer } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Drawer>`

| Property          | Type `(Default)`                               | Description                                                                                                                                                                               |
| ----------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFocus         | boolean `(true)`                               | when set to true, the Drawer is opened and is automatically focused on its own, accessible to screen readers                                                                              |
| backdrop          | unions: boolean, 'static'                      | when set to true, the Drawer will display the background when it is opened. Clicking on the background will close the Drawer. If you do not want to close the Drawer, set it to 'static'. |
| backdropClassName | string                                         | Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".                                                            |
| classPrefix       | string `('drawer')`                            | prefix of className                                                                                                                                                                       |
| enforceFocus      | boolean `(true)`                               | when set to true, Drawer will prevent the focus from leaving when opened, making it easier for the secondary screen reader to access                                                      |
| full              | boolean                                        | fullpage                                                                                                                                                                                  |
| keyboard          | boolean                                        | close Drawer when press `esc`                                                                                                                                                             |
| onShow            | () => void                                     | callback fired when Drawer display                                                                                                                                                        |
| onHide            | () => void                                     | callback fired when Drawer display                                                                                                                                                        |
| onEnter           | () => void                                     | callback fired before the Drawer transitions in                                                                                                                                           |
| onEntering        | () => void                                     | callback fired as the Drawer begins to transition in                                                                                                                                      |
| onEntered         | () => void                                     | callback fired after the Drawer finishes transitioning in                                                                                                                                 |
| onExit            | () => void                                     | callback fired right before the Drawer transitions out                                                                                                                                    |
| onExiting         | () => void                                     | callback fired as the Drawer begins to transition out                                                                                                                                     |
| onExited          | () => void                                     | callback fired after the Drawer finishes transitioning out                                                                                                                                |
| show \*           | boolean                                        | show Drawer                                                                                                                                                                               |
| size              | enum: 'lg', 'md', 'sm', 'xs'                   | set Drawer size                                                                                                                                                                           |
| placement         | enum: 'top','right','bottom', 'left' `(right)` | placement of Drawer                                                                                                                                                                       |
