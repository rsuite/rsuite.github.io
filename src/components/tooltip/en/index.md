# Tooltip

A text tip for secondary, which replaces the default title property of an HTML element.


* `<Tooltip>` Text tip.
* `<Whisper>` Monitor triggers, wrap the outside of the listener object, and notify the `Tooltip` when the event is triggered.

## Usage

```js
import { Tooltip, Whisper } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Tooltip>`

| Property        | Type `(Default)`     | Description                              |
| --------------- | -------------------- | ---------------------------------------- |
| positionLeft    | number               | Relative 'left' position offset          |
| positionTop     | number               | Relative 'top' position offset           |
| classPrefix     | string `('tooltip')` | Prefix of className                      |
| arrowOffsetLeft | number or string     | Arrow relative to 'left' position offset |
| arrowOffsetTop  | number or string     | Arrow relative to 'top' position offset  |

### `<Whisper>`

| Property     | Type `(Default)`                                       | Description                     |
| ------------ | ------------------------------------------------------ | ------------------------------- |
| placement    | enum: [Placement](#Placement) `('top')`                | Dispaly placement               |
| trigger      | union: 'click', 'hover', 'focus' `(['hover','focus'])` | Triggering events               |
| delay        | number                                                 | Delay Time                      |
| delayShow    | number                                                 | Show Delay Time                 |
| delayHide    | number                                                 | Hidden delay Time               |
| speaker \*   | union: Tooltip, Popover                                | Displayed component             |
| onBlur       | () => void                                             | Lose Focus callback function    |
| onClick      | () => void                                             | Click on the callback function  |
| onFocus      | () => void                                             | Callback function to get focus  |
| onMouseLeave | () => void                                             | Mouse leave callback function   |

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
  | 'rightBottom';
```

## Related components

* [`<Popover>`](./popover)
* [`<Message>`](./message)
* [`<Alert`>](./alert)
* [`<Notification>`](./notification)
