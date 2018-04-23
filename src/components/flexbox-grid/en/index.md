# FlexboxGird

Grid layout component implemented via CSS Flexbox, providing 24 grids.

* `<FlexboxGird>`
* `<FlexboxGird.Item>`

## Usage

```js
import { FlexboxGird } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<FlexboxGird>`

| Property    | Type`(default)`                                                              | Description            |
| ----------- | ---------------------------------------------------------------------------- | ---------------------- |
| classPrefix | string `('flex-box-gird')`                                                   | prefix of className    |
| align       | enum: 'top' , 'middle' , 'bottom' `('top')`                                  | align                  |
| justify     | enum : 'start', 'end', 'center', 'space-around', 'space-between' `('start')` | horizontal arrangement |

### `<FlexboxGird.Item>`

| Property    | Type`(default)`                 | Description             |
| ----------- | ------------------------------- | ----------------------- |
| classPrefix | string `('flex-box-gird-item')` | prefix of className     |
| colspan     | number `(0)`                    | spacing between grids   |
| order       | number `(0)`                    | grid orders for sorting |
