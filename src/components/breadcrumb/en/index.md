# Breadcrumb

Used to display the current page path and quickly return to the history page.

* `<Breadcrumb>`
* `<Breadcrumb.Item>`

## Usage

```js
import { Breadcrumb } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Breadcrumb>`

| Property    | Type `(Default)`                                       | Description         |
| ----------- | ------------------------------------------------------ | ------------------- |
| separator   | React.Node `(<i className="icon icon-angle-right" />)` | custom separator    |
| classPrefix | string `('breadcrumb')`                                | The prefix for component CSS class |

### `<Breadcrumb.Item>`

| Property       | Type `(Default)`           | Description          |
| -------------- | -------------------------- | -------------------- |
| active         | boolean                    | active state             |
| componentClass | React.ElementType `('ol')` | you can use a custom element for this component |
