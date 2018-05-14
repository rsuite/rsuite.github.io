# Checkbox

Commonly used checkboxes

* `<Checkbox>`
* `<CheckboxGroup>`

## Usage

```js
import { Checkbox, CheckboxGroup } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Checkbox>`

| Property       | Type `(default)`                                                 | Description                                                             |
| -------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| id             | React.ElementType                                                | Custom element type for the component                                   |
| name           | string                                                           | Used for the name of the form                                           |
| inline         | boolean                                                          | Inline layout                                                           |
| title          | string                                                           | HTML title                                                              |
| disabled       | boolean                                                          | Whether disabled                                                        |
| checked        | boolean                                                          | Specifies whether the checkbox is selected                              |
| defaultChecked | boolean                                                          | Specifies the initial state: whether or not the checkbox is selected    |
| onChange       | (value: any, checked: boolean, event: SyntheticInputEvent)=>void | Callback fired when checkbox is triggered and state changes             |
| inputRef       | React.ElementRef                                                 | Ref of input element                                                    |
| value          | any                                                              | Correspond to the value of CheckboxGroup, determine whether to select   |
| indeterminate  | boolean                                                          | When being a checkbox , setting styles after the child part is selected |

### `<CheckboxGroup>`

| Property     | Type `(default)`        | Description                                                 |
| ------------ | ----------------------- | ----------------------------------------------------------- |
| name         | string                  | Used for the name of the form                               |
| inline       | boolean                 | Inline layout                                               |
| value        | Array                   | Value of checked box  (Controlled)                          |
| defaultValue | Array                   | Default value                                               |
| onChange     | (value:any,event)=>void | Callback fired when checkbox is triggered and state changes |
