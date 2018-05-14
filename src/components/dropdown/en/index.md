# Dropdown select menu

A drop-down menu is a navigation that uses selectpicker if you want to select a value.

* `<Dropdown>` Drop-down menu.
* `<Dropdown.Item>` Drop-down menu options.
* `<Dropdown.Menu>` A submenu is created in the Drop-down menu.

## Usage

```js
import { Dropdown } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Dropdown>`

| Property        | Type`(default)`                                                                                                                         | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| activeKey       | any                                                                                                                                     | The option to activate the state, corresponding to the `eventkey` in the Dropdown.item. |
| classPrefix     | string `('dropdown')`                                                                                                                   | The prefix of the component CSS class                                                   |
| disabled        | boolean                                                                                                                                 | Whether or not component is disabled                                                    |
| menuStyle       | Object                                                                                                                                  | The style of the menu.                                                                  |
| title           | React.Node                                                                                                                              | Menu defaults to display content.                                                       |
| toggleClassName | string                                                                                                                                  | A css class to apply to the Toggle DOM node                                             |
| onClose         | () => void                                                                                                                              | The callback function that the menu closes                                              |
| onOpen          | () => void                                                                                                                              | Menu Pop-up callback function                                                           |
| onToggle        | (open?: boolean) => void                                                                                                                | Callback function for menu state switching.                                             |
| onSelect        | (eventKey: any, event: SyntheticEvent&lt;any&gt;) => void                                                                               | Selected callback function                                                              |
| renderTitle     | (children?: React.Node) => React.Node                                                                                                   | Custom title                                                                            |
| placement       | enum: [Placement](#Placement) `('bottomLeft')`                                                                                          | The placement of Menu                                                                   |
| icon            | React.Element&lt;typeof Icon&gt;                                                                                                        | Set the icon                                                                            |
| trigger         | union: <br/>'click', 'hover', 'contextMenu', <br/>Array<'click', 'hover', 'contextMenu'> `('click')`                                    | Triggering events                                                                       |

### `<Dropdown.Item>`

| Property       | Type`(default)`                                           | Description                                          |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------- |
| classPrefix    | string `('dropdown-item')`                                | The prefix of the component CSS class                |
| children \*    | React.Node                                                | The content of the component                         |
| divider        | boolean                                                   | Whether to display the divider                       |
| panel          | boolean                                                   | Displays a custom panel                              |
| active         | boolean                                                   | Active the current option                            |
| disabled       | boolean                                                   | Disable the current option                           |
| eventKey       | any                                                       | The value of the current option                      |
| onSelect       | (eventKey: any, event: SyntheticEvent&lt;any&gt;) => void | Select the callback function for the current option  |
| componentClass | React.ElementType                                         | You can use a custom element type for this component |
| icon           | React.Element&lt;typeof Icon&gt;                          | Set the icon                                         |

### `<Dropdown.Menu>`

| Property | Type`(default)`                  | Description                                                 |
| -------- | -------------------------------- | ----------------------------------------------------------- |
| title    | string                           | Define the title as a submenu                               |
| pullLeft | boolean                          | The submenu expands from the left and defaults to the right |
| icon     | React.Element&lt;typeof Icon&gt; | Set the icon                                                |


## Types

### Placement

```ts
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```
