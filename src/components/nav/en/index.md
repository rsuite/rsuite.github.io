# Nav

Provides a list of various forms of navigation menus, which can be landscape and portrait layout.

Contains the following components:

* `<Nav>`
* `<Nav.Item>`

## Usage

```js
import { Nav, Dropdown } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Nav>`

| Property    | Type `(Default)`                                           | Description                                                    |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| classPrefix | string `('nav')`                                           | The prefix of the component CSS class                          |
| children \* | React.ChildrenArray&lt;NavItem or Dropdown&gt;             | The contents of the component.                                 |
| tabs        | boolean                                                    | Tabbed navigation                                              |
| pills       | boolean                                                    | Pills navigation                                               |
| justified   | boolean                                                    | Justified navigation                                           |
| stacked     | boolean                                                    | Stacked navigation                                             |
| pullRight   | boolean                                                    | appears on the right.                                          |
| activeKey   | any                                                        | Active `key`, corresponding to `eventkey` in `<Nav.item>`.     |
|             |
| onSelect    | (eventKey: any, event: SyntheticEvent&lt;any&gt;) => void, | Callback function triggered after selection                    |

### `<Nav.Item>`

| Property       | Type `(Default)`                                           | Description                                           |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| active         | boolean                                                    | Activation status                                     |
| disabled       | boolean                                                    | Disabled status                                       |
| children \*    | React.Node                                                 | The contents of the component                         |
| icon           | React.Element&lt;typeof Icon&gt;                           | Sets the icon for the component                       |
| href           | string                                                     | Link                                                  |
| onSelect       | (eventKey: any, event: SyntheticEvent&lt;any&gt;) => void, | Select the callback function that the event triggers. |
| componentClass | React.ElementType                                          | Customizes the element type for the component.        |
