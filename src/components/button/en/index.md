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
| active         | boolean                                                                  | active state                                    |
| block          | boolean                                                                  | display block buttons                           |
| disabled       | boolean                                                                  | disabled button                                 |
| children \*    | React.Node                                                               | The content of the component.                   |
| size           | enum: 'lg', 'md', 'sm', 'xs' `('md')`                                    | set button size                                 |
| appearance     | enum: 'default', 'primary', 'link', 'subtle', 'ghost'<br/> `('default')` | set button appearence                           |
| color          | enum: 'red', 'orange','yellow', 'green', <br/>'cyan', 'blue', 'violet'   | set button color                                |
| classPrefix    | string `('btn')`                                                         | The prefix of the component CSS class              |
| componentClass | React.ElementType `('button')`                                           | you can use a custom element for this component |
| href           | string                                                                   | redirect url of link button                     |

### `<IconButton>`


`Iconbutton` extends all props of `Button`

| Property    | Type `(Default)`                 | Description                        |
| ----------- | -------------------------------- | ---------------------------------- |
| circle      | boolean                          | set circle button                  |
| icon        | React.Element&lt;typeof Icon&gt; | set the icon of button             |
| placement   | enum: 'left', 'right' `('left')` | placement of icon                  |
| classPrefix | string `('btn-icon')`            | The prefix of the component CSS class |

### `<ButtonGroup>`

| Property    | Type `(Default)`             | Description                        |
| ----------- | ---------------------------- | ---------------------------------- |
| block       | boolean                      | display block buttongroups         |
| justified   | boolean                      | horizontal constant width layout   |
| vertical    | boolean                      | vertical layouts of button         |
| size        | enum: `lg`, `md`, `sm`, `xs` | set button size                    |
| classPrefix | string `('btn-group')`       | The prefix of the component CSS class |
