# AutoComplete

Autocomplete function of input field.

## Usage

```js
import { AutoComplete } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<AutoComplete>`

| Property     | Type`(Default)`                              | Description                                                                      |
| ------------ | -------------------------------------------- | -------------------------------------------------------------------------------- |
| classPrefix  | string `('auto-complete')`                   | prefix of className                                                              |
| data         | Array<string>                                | data of component                                                                |
| disabled     | boolean                                      | whether disabled select                                                          |
| value        | string                                       | selected option                                                                  |
| defaultValue | string                                       | initial selected option.                                                         |
| onChange     | (value:string, event)=>void                  | called when select an option or input value change, or value of input is changed |
| onSelect     | (value:string, event)=>void                  | called when a option is selected.                                                |
| placeholder  | React.Node                                   | placeholder of input                                                             |
| renderItem   | (label:React.Node, item: Object)=>React.Node | custom selected option                                                           |
