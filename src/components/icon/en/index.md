# Icon

Icon components, in addition to the built-in common icons, you can also customize the introduction of SVG icons.

`<Icon>` Vector graphics implemented by font.

## Usage

```js
import { Icon } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

[All Icons](/tools/icons)

### `<Icon>`

| Property       | Type `(Default)`                   | Description                                                    |
| -------------- | ---------------------------------- | -------------------------------------------------------------- |
| classPrefix    | string `('icon')`                  | The prefix of the component CSS class                          |
| componentClass | React.ElementType `('i')`          | You can use a custom element type for this component           |
| icon \*        | union: string,SvgSymbol            | Icon name                                                      |
| size           | enum: 'lg', '2x', '3x', '4x', '5x' | Sets the icon size                                             |
| flip           | enum: 'horizontal', 'vertical'     | Flip the icon                                                  |
| stack          | enum: '1x', '2x'                   | Combine multiple icons                                         |
| rotate         | number                             | Rotate the icon                                                |
| fixedWidth     | boolean                            | Fixed icon width because there are many icons with uneven size |
| spin           | boolean                            | Dynamic rotation icon                                          |
| pulse          | boolean                            | Use pulse to have it rotate with 8 steps                       |
| svgStyle       | Object                             | Set SVG style when using custom SVG Icon                       |
