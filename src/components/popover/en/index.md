# Popover

When the mouse clicks/moves in, the pop-up pop-up box is used to display more content.

* `<Popover>` Pop-up box.
* `<Whisper>` Monitor triggers, wrap the outside of the listener object, and notify the `Tooltip` when the event is triggered.

## Usage

```js
import { Popover, Whisper } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Popover>`

| Property    | Type `(Default)`     | Description                            |
| ----------- | -------------------- | -------------------------------------- |
| classPrefix | string `('popover')` | The prefix of the component CSS class. |
| children \* | React.Node           | The content of the component.          |
| title       | React.Node           | The title of the component.            |

### `<Whisper>`

| Property     | Type `(Default)`                                       | Description                         |
| ------------ | ------------------------------------------------------ | ----------------------------------- |
| placement    | enum: [Placement](#Placement) `('top')`                | Dispaly placement                   |
| trigger      | union: 'click', 'hover', 'focus' `(['hover','focus'])` | Triggering events                   |
| delay        | number                                                 | Delay Time                          |
| delayShow    | number                                                 | Show Delay Time                     |
| delayHide    | number                                                 | Hidden delay Time                   |
| speaker \*   | union: Tooltip, Popover                                | Displayed component                 |
| onBlur       | () => void                                             | Lose Focus callback function        |
| onClick      | () => void                                             | Click on the callback function      |
| onFocus      | () => void                                             | Callback function to get focus      |
| onMouseLeave | () => void                                             | Mouse leave callback function       |
| onOpen       | ()=>void                                               | Callback fired when open component  |
| onClose      | ()=>void                                               | Callback fired when close component |
| container    | HTMLElement or (() => HTMLElement)                     | Sets the rendering container        |
| triggerRef   | React.ElementRef                                       | Ref of trigger                      |


## Types

### Placement

```js
type Placement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom'
  | 'auto'
  | 'autoVertical'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontal'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';
```

## Related components

* [`<Popover>`](./popover)
* [`<Message>`](./message)
* [`<Alert`>](./alert)
* [`<Notification>`](./notification)
