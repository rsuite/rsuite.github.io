# Radio

A common radio box. If there are only two options, you can also use the Toggle component.

* `<Radio>`
* `<RadioGroup>`

## Usage

```js
import { Radio, RadioGroup } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Radio>`

| Property       | Type `(Default)`                                                 | Description                                                                   |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| name           | string                                                           | Name to use for form                                                          |
| inline         | boolean                                                          | Inline layout                                                                 |
| title          | string                                                           | HTML title                                                                    |
| disabled       | boolean                                                          | The disable of component                                                      |
| checked        | boolean                                                          | Specifies whether the radio is selected                                       |
| defaultChecked | boolean                                                          | Specifies the initial state: whether or not the radio is selected             |
| onChange       | (value: any, checked: boolean, event: SyntheticInputEvent)=>void | callback function that has been checked for changes in state                  |
| inputRef       | React.ElementRef                                                 | Ref for the input element                                                     |
| value          | any                                                              | Value, corresponding to the value of the Radiogroup, to determine whether the |

### `<RadioGroup>`

| Property     | Type `(Default)`                            | Description                          |
| ------------ | ------------------------------------------- | ------------------------------------ |
| name         | string                                      | Name to use for form                 |
| inline       | boolean                                     | Inline layout                        |
| value        | any                                         | Value (Controlled)                   |
| defaultValue | any                                         | Default value                        |
| onChange     | (value:any,event:SyntheticInputEvent)=>void | Callback function with value changed |
