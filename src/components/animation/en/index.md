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
| in                | boolean                              | When true The animation will show itself                          |
| unmountOnExit     | boolean                              | Unmount component on exit                                         |
| transitionAppear  | boolean                              | Turn on transitions when initially displayed                      |
| timeout           | number `(300)`                       | Animation transition delay time                                   |
| exitedClassName   | string                               | Adding a className after the component finishes transitioning out |
| exitingClassName  | string                               | Adding a className as the component begins to transition out      |
| enteredClassName  | string                               | Adding a className after the component finished transtioning in   |
| enteringClassName | string                               | Adding a className as the component begins to transition in       |
| onEnter           | (node?: null, Element, Text) => void | Callback fired before the component transitions in                |
| onEntering        | (node?: null, Element, Text) => void | Callback fired as the component begins to transition in           |
| onEntered         | (node?: null, Element, Text) => void | Callback fired after the component finishes transitioning in      |
| onExit            | (node?: null, Element, Text) => void | Callback fired right before the component transitions out         |
| onExiting         | (node?: null, Element, Text) => void | Callback fired as the component begins to transition out          |
| onExited          | (node?: null, Element, Text) => void | Callback fired after the Modal finishes transitioning out         |

### `<Collapse>`

| Property          | Type `(Default)`                                 | Description                                                       |
| ----------------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| in                | boolean                                          | When true The animation will show itself                          |
| unmountOnExit     | boolean                                          | Unmount component on exit                                         |
| transitionAppear  | boolean                                          | Turn on transitions when initially displayed                      |
| timeout           | number`(300)`                                    | Animation transition delay time                                   |
| exitedClassName   | string `('collapse')`                            | Adding a className after the component finishes transitioning out |
| exitingClassName  | string `('collapsing')`                          | Adding a className as the component begins to transition out      |
| enteredClassName  | string `('collapse in')`                         | Adding a className after the component finished transtioning in   |
| enteringClassName | string `('collapsing')`                          | Adding a className as the component begins to transition in       |
| onEnter           | (node?: null, Element, Text) => void             | Callback fired before the component transitions in                |
| onEntering        | (node?: null, Element, Text) => void             | Callback fired as the component begins to transition in           |
| onEntered         | (node?: null, Element, Text) => void             | Callback fired after the component finishes transitioning in      |
| onExit            | (node?: null, Element, Text) => void             | Callback fired right before the component transitions out         |
| onExiting         | (node?: null, Element, Text) => void             | Callback fired as the component begins to transition out          |
| onExited          | (node?: null, Element, Text) => void             | Callback fired after the Modal finishes transitioning out         |
| role              | string                                           | HTML role                                                         |
| dimension         | union: 'height', 'width' ()=>('height', 'width') | Set fold size type                                                |
| getDimensionValue | ()=>number                                       | Custom size value                                                 |

### `<Transition>`

| Property          | Type `(Default)`                     | Description                                                       |
| ----------------- | ------------------------------------ | ----------------------------------------------------------------- |
| in                | boolean                              | When true The animation will show itself.                         |
| unmountOnExit     | boolean                              | Unmount component on exit                                         |
| transitionAppear  | boolean                              | Turn on transitions when initially displayed                      |
| timeout           | number`(1000)`                       | Animation transition delay time                                   |
| exitedClassName   | string                               | Adding a className after the component finishes transitioning out |
| exitingClassName  | string                               | Adding a className as the component begins to transition out      |
| enteredClassName  | string                               | Adding a className after the component finished transtioning in   |
| enteringClassName | string                               | Adding a className as the component begins to transition in       |
| onEnter           | (node?: null, Element, Text) => void | Callback fired before the component transitions in                |
| onEntering        | (node?: null, Element, Text) => void | Callback fired as the component begins to transition in           |
| onEntered         | (node?: null, Element, Text) => void | Callback fired after the component finishes transitioning in      |
| onExit            | (node?: null, Element, Text) => void | Callback fired right before the component transitions out         |
| onExiting         | (node?: null, Element, Text) => void | Callback fired as the component begins to transition out          |
| onExited          | (node?: null, Element, Text) => void | Callback fired after the Modal finishes transitioning out         |
