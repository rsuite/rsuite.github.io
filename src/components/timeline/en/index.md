# Timeline

Vertical display timeline.


## Usage

```js
import { Timeline } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Timeline>`


| Property       | Type `(Default)`                         | Description                                           |
| -------------- | ---------------------------------------- | ----------------------------------------------------- |
| componentClass | React.ElementType `('ul')`               | You can use a custom element type for this component |
|                |
| classPrefix    | string `('timeline')`                    | The prefix of the component CSS class                               |
| children \*    | React.ChildrenArray&lt;Timeline.Item&gt; | The content of the component                         |
|                |

### `<Timeline.Item>`


| Property       | Type `(Default)`           | Description                                           |
| -------------- | -------------------------- | ----------------------------------------------------- |
| componentClass | React.ElementType `('li')` | You can use a custom element type for this component |
| classPrefix    | string `('timeline-item')` | The prefix of the component CSS class                               |
| children \*    | React.Node                 | The content of the component                         |
| dot            | React.Node                 | Customizing the Timeline item                         |
