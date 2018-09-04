# Pagination

Paging navigation, used to assist long lists to load only part of the data, you can quickly switch to the specified data page.

* `<Pagination>`

## Usage

```js
import { Pagination } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Pagination>`

| Property             | Type `(Default)`                     | Description                                   |
| -------------------- | ------------------------------------ | --------------------------------------------- |
| activePage \*        | number `(1)`                         | Current page number                           |
| pages \*             | number `(1)`                         | Pages                                         |
| maxButtons           | number `(0)`                         | Page buttons display the maximum number of    |
| first                | boolean                              | Displays the first page                       |
| last                 | boolean                              | Displays the last page                        |
| prev                 | boolean                              | Displays the previous page                    |
| next                 | boolean                              | Displays the next page                        |
| ellipsis             | boolean                              | Displays the ellipsis                         |
| boundaryLinks        | boolean                              | Show border paging buttons 1 and pages        |
| buttonComponentClass | React.ElementType `(SafeAnchor)`     | Customizes the element type for the component |
| classPrefix          | string `('pagination')`              | The prefix of the component CSS class         |
| disabled             | boolean , (eventKey: any) => boolean | Disabled component                            |
