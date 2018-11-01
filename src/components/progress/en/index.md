# Progress

Display the current progress of an operation flow.

* `<Progress.Line>` Linear progress
* `<Progress.Circle>` Circular Progress

## Usage

```js
import { Progress } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Progress.Line>`

| Property    | Type `(Default)`                  | Description                           |
| ----------- | --------------------------------- | ------------------------------------- |
| classPrefix | string `('progress')`             | The prefix of the component CSS class |
| percent     | number `(0)`                      | Percent of progress                   |
| strokeWidth | number                            | Line width                            |
| strokeColor | string                            | Line Color                            |
| trailWidth  | number                            | Trail width                           |
| trailColor  | string                            | Trail color                           |
| status      | enum: 'success', 'fail', 'active' | Progress status                       |
| showInfo    | boolean `(true)`                  | Show text                             |

### `<Progress.Circle>`

| Property      | Type `(Default)`                                 | Description                              |
| ------------- | ------------------------------------------------ | ---------------------------------------- |
| classPrefix   | string `('progress')`                            | The prefix of the component CSS class    |
| percent       | number `(0)`                                     | Percent of progress                      |
| strokeWidth   | number `(6)`                                     | Line width                               |
| strokeColor   | string                                           | Line Color                               |
| trailWidth    | number `(6)`                                     | Trail width                              |
| trailColor    | string                                           | Trail color                              |
| status        | enum: 'success', 'fail', 'active'                | Progress status                          |
| showInfo      | boolean `(true)`                                 | Show text                                |
| strokeLinecap | enum: 'round', 'square', 'butt' `('round')`      | The end of different types of open paths |
| gapPosition   | enum: 'right', 'top', 'bottom', 'left' `('top')` | Circular progress bar Notch position     |
| gapDegree     | gapDegree                                        | the gap degree of half circle, 0 ~ 360   |