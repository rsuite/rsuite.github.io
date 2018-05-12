# Tag

Tag for categorizing or markup.


## Usage

```js
import { Tag } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Tag>`

| Property       | Type `(Default)`                           | Description                                           |
| -------------- | ------------------------------------------ | ----------------------------------------------------- |
| componentClass | React.ElementType `('div')`                | You can use a custom element type for this component  |
| classPrefix    | string `('tag')`                           | The prefix of the component CSS class                 |
| closable       | boolean                                    |
| children \*    | React.Node                                 | The content of the component.                         |
| onClose        | (event: SyntheticEvent&lt;any&gt;) => void | Click the callback function for the Close button      |
