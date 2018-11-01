# Slider

A Slider component for displaying current value

* `<Slider>`

## Usage

```js
import { Slider } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Slider>`

| Property        | Type `(Default)`             | Description                                   |
| --------------- | ---------------------------- | --------------------------------------------- |
| min             | number`(0)`                  | Minimum value of sliding range                |
| max             | number`(100)`                | Maximum sliding range                         |
| step            | number`(1)`                  | Slide the value of one step                   |
| value           | number                       | Value (Controlled)                            |
| defaultValue    | number                       | Default value                                 |
| handleClassName | string                       | A css class to apply to the Handle node       |
| handleTitle     | React.Node                   | Customizing what is displayed inside a handle |
| handleStyle     | Object                       | A css style to apply to the Handle node       |
| barClassName    | string                       | A css class to apply to the Bar DOM node      |
| disabled        | boolean                      | The disabled of component                     |
| graduated       | boolean                      | Show Ticks                                    |
| tooltip         | boolean`(true)`              | Whether to show `Tooltip` when sliding        |
| progress        | boolean                      | Show sliding progress bar                     |
| vertical        | boolean                      | Vertical Slide                                |
| onChange        | (value: number) => void      | Callback function that changes data           |
| renderMark      | (mark: number) => React.Node | Customize labels on the render ruler          |
