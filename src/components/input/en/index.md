# Input

Instead of HTML native controls, input, textarea.

* `<Input>` The input box component.
* `<InputGroup>` The input box combination component.
* `<InputGroup.Button>` Combined with the button.
* `<InputGroup.Addon>` Custom additional elements.

## Usage

```js
import { Input, InputGroup } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Input>`

| Property     | Type `(Default)`                                                   | Description                                      |
| ------------ | ------------------------------------------------------------------ | ------------------------------------------------ |
| classPrefix  | string `('input')`                                                 | The prefix of the component CSS class            |
| type         | string `('text' )`                                                 | HTML input type                                  |
| value        | number                                                             | Value (Controlled)                               |
| defaultValue | number                                                             | Default value                                    |
| onChange     | (value: any, event: SyntheticInputEvent<HTMLInputElement>) => void | The callback function in which value is changed. |
| disabled     |                                                                    | Disabled component                               |

### `<InputGroup>`

| Property    | Type `(Default)`         | Description                             |
| ----------- | ------------------------ | --------------------------------------- |
| classPrefix | string `('input-group')` | The prefix of the component CSS class   |
| inside      | boolean                  | Sets the composition content internally |
