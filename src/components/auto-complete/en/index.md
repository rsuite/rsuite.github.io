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
| classPrefix  | string `('auto-complete')`                         | The prefix of the component CSS class                                            |
| data \*      | Array&lt;[DataItemType](#DataItemType)&gt;         | The data of component                                                            |
| disabled     | boolean                                            | Whether disabled select                                                          |
| value        | DataItemType.value                                 | Value (Controlled)                                                               |
| defaultValue | DataItemType.value                                 | Default value                                                                    |
| onChange     | (value:DataItemType.value, event)=>void            | Called when select an option or input value change, or value of input is changed |
| onSelect     | (value:DataItemType, event)=>void                  | Called when a option is selected.                                                |
| placeholder  | React.Node                                         | The placeholder of input                                                         |
| renderItem   | (label:React.Node, item: DataItemType)=>React.Node | Custom selected option                                                           |

## Types

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```
