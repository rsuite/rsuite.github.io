# Animation

Handling animation components

* `Animation.Fade`.
* `Animation.Collapse`.
* `Animation.Transition`.

When Transition fails to meet business needs，you can try [react-transition-group](https://github.com/reactjs/react-transition-group)

## Useage

```js
import { Animation } from 'rsuite';

const { Fade, Collapse, Transition } = Animation;
```

## Examples

<!--{demo}-->

## Props

### `<Fade>`

| Property          | Type `(Default)`                     | Description                                                       |
| ----------------- | ------------------------------------ | ----------------------------------------------------------------- |
| in                | boolean                              | enter                                                             |
| unmountOnExit     | boolean                              | unmount component on exit                                         |
| transitionAppear  | boolean                              | turn on transitions when initially displayed                      |
| timeout           | number `(300)`                       | animation transition delay time                                   |
| exitedClassName   | string                               | adding a className after the component finishes transitioning out |
| exitingClassName  | string                               | adding a className as the component begins to transition out      |
| enteredClassName  | string                               | adding a className after the component finished transtioning in   |
| enteringClassName | string                               | adding a className as the component begins to transition in       |
| onEnter           | (node?: null, Element, Text) => void | callback fired before the component transitions in                |
| onEntering        | (node?: null, Element, Text) => void | callback fired as the component begins to transition in           |
| onEntered         | (node?: null, Element, Text) => void | callback fired after the component finishes transitioning in      |
| onExit            | (node?: null, Element, Text) => void | callback fired right before the component transitions out         |
| onExiting         | (node?: null, Element, Text) => void | callback fired as the component begins to transition out          |
| onExited          | (node?: null, Element, Text) => void | callback fired after the Modal finishes transitioning out         |

### `<Collapse>`

| Property          | Type `(Default)`                                 | Description                                                       |
| ----------------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| in                | boolean                                          | enter                                                             |
| unmountOnExit     | boolean                                          | unmount component on exit                                         |
| transitionAppear  | boolean                                          | turn on transitions when initially displayed                      |
| timeout           | number`(300)`                                    | animation transition delay time                                   |
| exitedClassName   | string `('collapse')`                            | adding a className after the component finishes transitioning out |
| exitingClassName  | string `('collapsing')`                          | adding a className as the component begins to transition out      |
| enteredClassName  | string `('collapse in')`                         | adding a className after the component finished transtioning in   |
| enteringClassName | string `('collapsing')`                          | adding a className as the component begins to transition in       |
| onEnter           | (node?: null, Element, Text) => void             | callback fired before the component transitions in                |
| onEntering        | (node?: null, Element, Text) => void             | callback fired as the component begins to transition in           |
| onEntered         | (node?: null, Element, Text) => void             | callback fired after the component finishes transitioning in      |
| onExit            | (node?: null, Element, Text) => void             | callback fired right before the component transitions out         |
| onExiting         | (node?: null, Element, Text) => void             | callback fired as the component begins to transition out          |
| onExited          | (node?: null, Element, Text) => void             | callback fired after the Modal finishes transitioning out         |
| role              | string                                           | HTML role                                                         |
| dimension         | union: 'height', 'width' ()=>('height', 'width') | Set fold size type                                                |
| getDimensionValue | ()=>number                                       | Custom size value                                                 |

### `<Transition>`

| Property          | Type `(Default)`                     | Description                                                       |
| ----------------- | ------------------------------------ | ----------------------------------------------------------------- |
| in                | boolean                              | enter                                                             |
| unmountOnExit     | boolean                              | unmount component on exit                                         |
| transitionAppear  | boolean                              | turn on transitions when initially displayed                      |
| timeout           | number`(1000)`                       | animation transition delay time                                   |
| exitedClassName   | string                               | adding a className after the component finishes transitioning out |
| exitingClassName  | string                               | adding a className as the component begins to transition out      |
| enteredClassName  | string                               | adding a className after the component finished transtioning in   |
| enteringClassName | string                               | adding a className as the component begins to transition in       |
| onEnter           | (node?: null, Element, Text) => void | callback fired before the component transitions in                |
| onEntering        | (node?: null, Element, Text) => void | callback fired as the component begins to transition in           |
| onEntered         | (node?: null, Element, Text) => void | callback fired after the component finishes transitioning in      |
| onExit            | (node?: null, Element, Text) => void | callback fired right before the component transitions out         |
| onExiting         | (node?: null, Element, Text) => void | callback fired as the component begins to transition out          |
| onExited          | (node?: null, Element, Text) => void | callback fired after the Modal finishes transitioning out         |
