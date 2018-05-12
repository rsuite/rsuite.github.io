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

| Property          | Type `(Default)`       | Description                          |
| ----------------- | ---------------------- | ------------------------------------ |
| checked           | boolean                | Checked（Controlled）                |
| defaultChecked    | boolean                | Default checked                      |
| disabled          | boolean                | Disabled                             |
| checkedChildren   | node                   | Checked display content              |
| unCheckedChildren | node                   | Unselected display content           |
| classPrefix       | string `'toggle'`      | The prefix for component CSS class                  |
| size              | enum: 'lg', 'md', 'sm' | Toggle size                          |
| onChange          | function               | Callback function when state changes |
