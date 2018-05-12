# Loader

A component that provides state during data loading.

* `<Loader>`

## Usage

```js
import { Loader } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Loader>`

| Property    | Type `(Default)`                        | Description                                     |
| ----------- | --------------------------------------- | ----------------------------------------------- |
| backdrop    | boolean                                 | Whether the background is displayed             |
| classPrefix | string                                  | The prefix of the component CSS class           |
| size        | enum: 'lg', 'md', 'sm', 'xs'`('md')`    | Sets the loader dimensions                      |
| center      | boolean                                 | Centered in the container                       |
| content     | React.Node                              | Custom descriptive text                         |
| speed       | enum:'fast','normal','slow'`('normal')` | The speed at which the loader rotates           |
| inverse     | boolean                                 | An alternative dark visual style for the Loader |
