# Form

A set of components and models that process form data.

* `<Form>` Define a form.
* `<FormControl>` Define form-control.
* `<FormGroup>` Define form groups, used for form layout.
* `<ControlLabel>` title of form-control.
* `<HelpBlock>` help infomation of form-controll

## Usage

```js
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Form>`

| Property         | Type `(default)`                                        | Description                                                                  |
| ---------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| classPrefix      | string `('form')`                                       | prefix of className                                                          |
| layout           | enum: 'horizontal', 'vertical', 'inline' `('vertical')` | Set the left and right columns of the layout of the elements within the form |
| formValue        | object                                                  | (Controlled) value of form                                                   |
| formDefaultValue | object                                                  | (Uncontrolled) default value of form                                         |
| formError        | object                                                  | error message of form                                                        |
| model            | Schema                                                  | SchemaModel Object                                                           |
| checkDelay       | number `(500)`                                          | delayed processing when data check, unit: millisecond                        |
| checkTrigger     | enum: 'change','blur','none' `('change')`               | trigger the type of form validation                                          |
| onChange         | function(formValue:Object, event:Object)                | callback fired when data changing                                            |
| onError          | function(formError:Object)                              | callback fired when error checking                                           |
| onCheck          | function(formError:Object)                              | callback fired when data cheking                                             |

---

> methods

* check(callback: (formError: Object) => void) => void check form data
* cleanErrors(callback: () => void) => void clean error message

### `<FormControl>`

| Property       | Type`(default)`                  | Description                                                                      |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------- |
| classPrefix    | string `('form-control')`        | prefix of className                                                              |
| name           | string                           | name of form-control                                                             |
| accepter       | React.ElementType `(Input)`      | proxied components                                                               |
| checkTrigger   | enum: 'change','blur','none'     | The data validation trigger type, and it wiill overrides the setting on `<Form>` |
| errorMessage   | React.Node                       | show error messages                                                              |
| errorPlacement | enum: Placement `('bottomLeft')` | placement of error messages                                                      |

### `<FormGroup>`

| Property    | Type`(default)`         | Description                      |
| ----------- | ----------------------- | -------------------------------- |
| classPrefix | string `('form-group')` | prefix of className              |
| controlId   | string                  | sets id for controlled component |

### `<ControlLabel>`

| Property    | Type`(default)`            | Description                                                                 |
| ----------- | -------------------------- | --------------------------------------------------------------------------- |
| classPrefix | string `('control-label')` | prefix os className                                                         |
| htmlFor     | string                     | attribute of the html label tag, defaults to the controlId of the FormGroup |
| srOnly      | boolean                    | screen reader only                                                          |

### `<HelpBlock>`

| Property    | Type`(default)`         | Description                                                                 |
| ----------- | ----------------------- | --------------------------------------------------------------------------- |
| classPrefix | string `('help-block')` | prefix of className                                                         |
| htmlFor     | string                  | attribute of the html label tag, defaults to the controlId of the FormGroup |
| tooltip     | boolean                 | Whether to show through the Tooltip component                               |

```js
Type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```
