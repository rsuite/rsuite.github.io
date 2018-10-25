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

| Property       | Type `(Default)`                                                         | Description                                                    |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| active         | boolean                                                                  | A button can show it is currently the active user selection    |
| block          | boolean                                                                  | Spans the full width of the Button parent                      |
| disabled       | boolean                                                                  | A button can show it is currently unable to be interacted with |
| children \*    | React.Node                                                               | Primary content                                                |
| size           | enum: 'lg', 'md', 'sm', 'xs' `('md')`                                    | A button can have different sizes                              |
| appearance     | enum: 'default', 'primary', 'link', 'subtle', 'ghost'<br/> `('default')` | A button can have different appearances                        |
| color          | enum: 'red', 'orange','yellow', 'green', <br/>'cyan', 'blue', 'violet'   | A button can have different colors                             |
| classPrefix    | string `('btn')`                                                         | The prefix of the component CSS class                          |
| componentClass | React.ElementType `('button')`                                           | You can use a custom element for this component                |
| href           | string                                                                   | Providing a `href` will render an `a` element                  |
| loading        | boolean                                                                  | A button can show a loading indicator                          |

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
