# Steps

Steps is a navigation bar that guides users through the steps of a task.

* `<Steps>`
* `<Steps.Item>`

## Usage

```js
import { Steps } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Steps>`

| Property      | Type `(Default)`                                   | Description                   |
| ------------- | -------------------------------------------------- | ----------------------------- |
| classPrefix   | string `('steps')`                                 | The prefix of the component CSS class       |
| vertical      | boolean                                            | Vertical display              |
| small         | boolean                                            | Small size Step Bar           |
| current       | number`(0)`                                        | Current execution steps       |
| currentStatus | 'finish', 'wait', 'process', 'error' `('process')` | Current Execution Step Status |

### `<Steps.Item>`

| Property    | Type `(Default)`                     | Description                   |
| ----------- | ------------------------------------ | ----------------------------- |
| classPrefix | string `('steps-item')`              | The prefix of the component CSS class       |
| title       | React.Node                           | The title of Steps item       |
| description | React.Node                           | The description of Steps item |
| icon        | React.Element&lt;typeof Icon&gt; ,   | Set icon                      |
| status      | 'finish', 'wait', 'process', 'error' | Step status                   |
