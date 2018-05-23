# Sidenav

An encapsulation of the Nav for the sidebar of the page.

* `<Sidenav>` Side navigation component.
* `<Sidenav.Header>` Navigates the hender content.
* `<Sidenav.Body>` Navigation body content.


## Usage

```js
import { Sidenav } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Sidenav>`

| Property         | Type `(Default)`                                            | Description |
| ---------------- | ----------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| appearance       | enum: 'default', 'inverse', 'subtle'                        | 'default'   | Menu style                                                  |
| classPrefix      | string                                                      | 'sidenav'   | The prefix of the component CSS class                       |
| componentClass   | React.ElementType                                           | 'div'       | You can use a custom element type for this component        |
| expanded         | boolean                                                     | true        | Whether to expand the Sidenav                               |
| openKeys         | Array&lt;any&gt;                                            |             | Open menu, corresponding to Dropdown eventkey (controlled)  |
| defaultOpenKeys  | Array&lt;any&gt;                                            |             | Open menu, corresponding to Dropdown eventkey               |
| activeKey        | any                                                         |             | Activation option, corresponding menu eventkey (controlled) |
| defaultActiveKey | any                                                         |             | Activation option, corresponding menu eventkey              |
| onSelect         | (eventKey: Array&lt;any&gt;, event: SyntheticEvent) => void |             | Select the callback function for the menu.                  |
| onOpenChange     | (openKeys: Array&lt;any&gt;, event: SyntheticEvent) => void |             | Menu opening callback function that changed                 |
