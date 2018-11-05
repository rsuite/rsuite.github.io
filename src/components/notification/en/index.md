# Notification

For global notifications, suspended in the corner of the page.

* `Notification.open` default notification.
* `Notification.info` information notice.
* `Notification.success` successful information notification.
* `Notification.warning` warning information
* `Notification.error` error message notification.


## Usage

```js
import { Notification } from 'rsuite';
```

## Examples

<!--{demo}-->

## Methods

### `Notification.open`

```
Notification.open(config: Config);
```

### `Notification.info`

```
Notification.info(config: Config);
```

### `Notification.success`

```
Notification.success(config: Config);
```

### `Notification.warning`

```
Notification.warning(config: Config);
```

### `Notification.error`

### `Notification.remove`

```
Notification.remove(key: string);
```

Removes a message box.

```js
Notification.open({
  title: 'Title',
  description: 'Message',
  key: 'myNotification'
});

Notification.remove('myNotification');
```

## Types

### Config

```typescript
type Config{
  title:string,
  description:React.ElementType,
  duration?:number,
  placement?:string,
  top?:number,
  bottom?:number,
  onClose?:()=>void,
  style?:Object,
  key?:string
}
```

| Property       | Type `(Default)`                            | Description                                                                                                             |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| bottom         | number `(24)`                               | The distance from the bottom of the message box                                                                         |
| description \* | React.Node                                  | The description of the message box                                                                                      |
| duration       | number `(4500)`                             | message box duration (Unit: milliseconds)                                                                               |
| key            | string                                      | The message box is uniquely identified, and you must fill out the field if you want to manually remove the message box. |
| onClose        | ()=>void                                    | Closes the callback function.                                                                                           |
| placement      | enum: [Placement](#Placement)`('topRight')` | The placement of the message box.                                                                                       |
| title \*       | string                                      | The title of the message box                                                                                            |
| top            | number `(24)`                               | The distance from the top of the message box                                                                            |




## Types

### Placement

```ts
type Placement = 'topLeft','topRight','bottomLeft','bottomRight'
```

## Related components

* [`<Popover>`](./popover)
* [`<Tooltip>`](./tooltip)
* [`<Message>`](./message)
* [`<Alert`>](./alert)

