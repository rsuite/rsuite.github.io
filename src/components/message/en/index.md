# Message

Used to show important tips on a page.

* `<Message>`

## Usage

```js
import { Message } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Message>`

| Property    | Type `(Default)`                                       | Description                                     |
| ----------- | ------------------------------------------------------ | ----------------------------------------------- |
| type        | enum: 'info', 'success', 'warning', 'error' `('info')` | The type of the message box.                    |
| closable    | boolean                                                | Whether it is possible to close the message box |
| closeLabel  | string `('Close')`                                     | Closes the prompt text on the button.           |
| title       | React.Node                                             | The title of the message.                       |
| description | React.Node                                             | The description information for the message.    |
| showIcon    | boolean                                                | Whether to display an icon.                     |
| full        | boolean                                                | Fill the container                              |
| classPrefix | string                                                 | The prefix of the component CSS class.          |

## Related components

* [`<Popover>`](./popover)
* [`<Tooltip>`](./tooltip)
* [`<Alert`>](./alert)
* [`<Notification>`](./notification)
