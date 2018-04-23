# Buttons Button

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
| size           | enum: 'lg', 'md', 'sm', 'xs' `('md')`                                    | set button size                                 |
| appearance     | enum: 'default', 'primary', 'link', 'subtle', 'ghost'<br/> `('default')` | set button appearence                           |
| color          | enum: 'red', 'orange','yellow', 'green', <br/>'cyan', 'blue', 'violet'   | set button color                                |
| classPrefix    | string `('btn')`                                                         | prefix osclassName                              |
| componentClass | React.ElementType `('button')`                                           | you can use a custom element for this component |
| href           | string                                                                   | redirect url of link button                     |

### `<IconButton>`

IconButton 继承所有 Button 的属性

| Property    | Type `(Default)`                 | Description            |
| ----------- | -------------------------------- | ---------------------- |
| circle      | boolean                          | set circle button      |
| icon        | React.Element&lt;typeof Icon&gt; | set the icon of button |
| placement   | enum: 'left', 'right' `('left')` | placement of icon      |
| classPrefix | string `('btn-icon')`            | prefix of className    |

### `<ButtonGroup>`

| Property    | Type `(Default)`             | Description                |
| ----------- | ---------------------------- | -------------------------- |
| block       | boolean                      | display block buttongroups |
| justified   | boolean                      | horizontal constant width layout    |
| vertical    | boolean                      | vertical layouts of button |
| size        | enum: `lg`, `md`, `sm`, `xs` | set button size            |
| classPrefix | string `('btn-group')`       | prefix of className        |
