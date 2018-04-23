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
| id             | React.ElementType                                                | custom element type for the component                                   |
| name           | string                                                           | used for the name of the form                                           |
| inline         | boolean                                                          | inline layout                                                           |
| title          | string                                                           | HTML title                                                              |
| disabled       | boolean                                                          | whether disabled                                                        |
| checked        | boolean                                                          | specifies whether the checkbox is selected                              |
| defaultChecked | boolean                                                          | Specifies the initial state: whether or not the checkbox is selected    |
| onChange       | (value: any, checked: boolean, event: SyntheticInputEvent)=>void | callback fired when checkbox is triggered and state changes             |
| inputRef       | React.ElementRef                                                 | ref of input element                                                    |
| value          | any                                                              | correspond to the value of CheckboxGroup, determine whether to select   |
| indeterminate  | boolean                                                          | When being a checkbox , setting styles after the child part is selected |

### `<CheckboxGroup>`

| Property     | Type `(default)`        | Description                                                 |
| ------------ | ----------------------- | ----------------------------------------------------------- |
| name         | string                  | used for the name of the form                               |
| inline       | boolean                 | inline layout                                               |
| value        | Array                   | (Controlled) value of checked box                           |
| defaultValue | Array                   | default value                                               |
| onChange     | (value:any,event)=>void | callback fired when checkbox is triggered and state changes |
