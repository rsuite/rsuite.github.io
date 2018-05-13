# Button

Commonly used operating buttons, button combinations, button layouts.

* `<Button>` is the most basic element in the component, you can quickly create a styled button.
* `<IconButton>` Button with icon.
* `<ButtonGroup>` Button group control can put a group of buttons together and control the layout.
* `<ButtonToolbar>` Button Toolbar Controls.

## Usage

```js
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Button>`

| Property       | Type `(Default)`                                                         | Description                                     |
| -------------- | ------------------------------------------------------------------------ | ----------------------------------------------- |
| active         | boolean                                                                  | Active state                                    |
| block          | boolean                                                                  | Display block buttons                           |
| disabled       | boolean                                                                  | Disabled button                                 |
| children \*    | React.Node                                                               | The content of the component.                   |
| size           | enum: 'lg', 'md', 'sm', 'xs' `('md')`                                    | Set button size                                 |
| appearance     | enum: 'default', 'primary', 'link', 'subtle', 'ghost'<br/> `('default')` | Set button appearence                           |
| color          | enum: 'red', 'orange','yellow', 'green', <br/>'cyan', 'blue', 'violet'   | Set button color                                |
| classPrefix    | string `('btn')`                                                         | The prefix of the component CSS class           |
| componentClass | React.ElementType `('button')`                                           | You can use a custom element for this component |
| href           | string                                                                   | Redirect url of link button                     |

### `<IconButton>`


`Iconbutton` extends all props of `Button`

| Property    | Type `(Default)`                 | Description                           |
| ----------- | -------------------------------- | ------------------------------------- |
| circle      | boolean                          | Set circle button                     |
| icon        | React.Element&lt;typeof Icon&gt; | Set the icon of button                |
| placement   | enum: 'left', 'right' `('left')` | The placement of icon                 |
| classPrefix | string `('btn-icon')`            | The prefix of the component CSS class |

### `<ButtonGroup>`

| Property    | Type `(Default)`             | Description                           |
| ----------- | ---------------------------- | ------------------------------------- |
| block       | boolean                      | Display block buttongroups            |
| justified   | boolean                      | Horizontal constant width layout      |
| vertical    | boolean                      | Vertical layouts of button            |
| size        | enum: `lg`, `md`, `sm`, `xs` | Set button size                       |
| classPrefix | string `('btn-group')`       | The prefix of the component CSS class |
