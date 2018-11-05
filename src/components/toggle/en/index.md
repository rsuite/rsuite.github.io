# Toggle

Used to select between two values.

## Usage

```js
import { Toggle } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Toggle>`

| Property          | Type `(Default)`       | Description                           |
| ----------------- | ---------------------- | ------------------------------------- |
| checked           | boolean                | Checked（Controlled）                 |
| checkedChildren   | node                   | Checked display content               |
| classPrefix       | string `'toggle'`      | The prefix of the component CSS class |
| defaultChecked    | boolean                | Default checked                       |
| disabled          | boolean                | Disabled                              |
| onChange          | function               | Callback function when state changes  |
| size              | enum: 'lg', 'md', 'sm' | Toggle size                           |
| unCheckedChildren | node                   | Unselected display content            |
