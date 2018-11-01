# InputNumber


## Usage

```js
import { InputNumber } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<InputNumber>`

| Property     | Type `(Default)`                                                   | Description                                                    |
| ------------ | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| classPrefix  | string `('input-number')`                                          | The prefix of the component CSS class                          |
| min          | number `(-Infinity)`                                               | Minimum value                                                  |
| max          | number `(Infinity)`                                                | Maximum value                                                  |
| step         | number `(1)`                                                       | The value of each step. can be decimal.                        |
| value        | number                                                             | Value （Controlled）                                           |
| defaultValue | number                                                             | Default value                                                  |
| prefix       | React.Node                                                         | Sets the element displayed to the left of the component.       |
| postfix      | React.Node                                                         | Sets the element displayed on the right side of the component. |
| disabled     | boolean                                                            | Disabled component                                             |
| onChange     | (value: any, event: SyntheticInputEvent<HTMLInputElement>) => void | The callback function when value changes                       |
| size         | enum: 'lg', 'md', 'sm', 'xs' `('md')`                              | An input can have different sizes                              |
