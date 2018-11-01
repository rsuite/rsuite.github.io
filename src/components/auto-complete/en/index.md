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

| Property      | Type`(Default)`                                                 | Description                                                                      |
| ------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| classPrefix   | string `('auto-complete')`                                      | The prefix of the component CSS class                                            |
| data \*       | Array&lt;string&gt;, Array&lt;[DataItemType](#DataItemType)&gt; | The data of component                                                            |
| disabled      | boolean                                                         | Whether disabled select                                                          |
| value         | string                                                          | Value (Controlled)                                                               |
| defaultValue  | string                                                          | Default value                                                                    |
| onChange      | (value:string, event)=>void                                     | Called when select an option or input value change, or value of input is changed |
| onSelect      | (item: DataItemType, event)=>void                               | Called when a option is selected.                                                |
| onClose        | ()=>void                                                        | Callback fired when hidden                                                       |
| placeholder   | React.Node                                                      | The placeholder of input                                                         |
| renderItem    | (label:React.Node, item: DataItemType)=>React.Node              | Custom selected option                                                           |
| selectOnEnter | boolean `(true)`                                                | When set to `false`, the Enter key selection function is invalid                 |

## Types

### DataItemType

```ts
type DataItemType = {
  value: string
  label: React.Node
};
```
