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

| Property     | Type`(Default)`                                    | Description                                                                      |
| ------------ | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| classPrefix  | string `('auto-complete')`                         | prefix of className                                                              |
| data \*      | Array&lt;[DataItemType](#DataItemType)&gt;         | data of component                                                                |
| disabled     | boolean                                            | whether disabled select                                                          |
| value        | DataItemType.value                                 | selected option                                                                  |
| defaultValue | DataItemType.value                                 | initial selected option.                                                         |
| onChange     | (value:DataItemType.value, event)=>void            | called when select an option or input value change, or value of input is changed |
| onSelect     | (value:DataItemType, event)=>void                  | called when a option is selected.                                                |
| placeholder  | React.Node                                         | placeholder of input                                                             |
| renderItem   | (label:React.Node, item: DataItemType)=>React.Node | custom selected option                                                           |

## Types

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
