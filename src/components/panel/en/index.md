# Panel

A content panel that supports folding panels.
The Panel can have all the ' Data Display ' components and can be used as a container for the form.

* `<Panel>`
* `<PanelGroup>`

## Usage

```js
import { Panel, PanelGroup } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Panel>`

| Property        | Type `(Default)`   | Description                               |
| --------------- | ------------------ | ----------------------------------------- |
| bordered        | boolean            | Show border                               |
| bodyFill        | boolean            | Content area filled with containers       |
| collapsible     | boolean            | Whether it is a collapsible panel         |
| classPrefix     | string `('panel')` | The prefix of the component CSS class        |
| defaultExpanded | boolean            | Expand by default                         |
| expanded        | boolean            | Expand the Panel.                         |
| eventKey        | any                | The event key corresponding to the panel. |
| header          | React.Node         | The head displays information.            |
| id              | string or number   | ID                                        |

### `<PanelGroup>`

| Property         | Type `(Default)`                               | Description                                                  |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| accordion        | boolean                                        | Whether it is a collapsible panel.                           |
| classPrefix      | string                                         | The prefix of the component CSS class                           |
| activeKey        | any                                            | Expand the Panel, corresponding to the 'Panel' of 'eventkey' |
| defaultActiveKey | any                                            | The default expansion panel.                                 |
| onSelect         | (eventKey: any, event: SyntheticEvent) => void | Toggles the callback function for the expand panel           |
