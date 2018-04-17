# DatePicker DateTime Selector

To select or input a date or time

* `<DatePicker>`

> When you need to select a date range, it is recommended to use [`<DateRangePicker>`](./date-range-picker)

## Usage

```js
import { DatePicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<DatePicker>`

| Property            | Type`(default)`                                | Description                                                                          |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| value               | moment$Moment                                  | (Controller) to set date                                                             |
| defaultValue        | moment$Moment                                  | to set default value                                                                 |
| calendarDefaultDate | moment$Moment                                  | calendar panel default presentation date and time                                    |
| onChange            | (date:moment$Moment)=>void                     | callback fired when value changed                                                    |
| onSelect            | (date:moment$Moment)=>void                     | callback fired when date or time is selected                                         |
| onOpen              | ()=>void                                       | callback fired when open component                                                   |
| onClose             | ()=>void                                       | callback fired when close component                                                  |
| placeholder         | string                                         | placeholder                                                                          |
| format              | string `('YYYY-MM-DD')`                        | format date                                                                          |
| locale              | Object [`(Locale)`](#Locale)                   | i18n config                                                                          |
| ranges              | Array<[Range](#Range)> [`(Ranges)`](#Ranges)   | Shortcut config                                                                      |
| inline              | boolean                                        | display date panel when component initial                                            |
| disabled            | boolean                                        | whether disabled the component                                                       |
| disabledDate        | (date:moment$Moment)=>boolean                  | disabled date                                                                        |
| disabledHours       | (hour:number, date:moment$Moment)=>boolean     | disabled hours                                                                       |
| disabledMinutes     | (minute:number, date:moment$Moment)=>boolean   | disabled minutes                                                                     |
| disabledSeconds     | (second:number, date:moment$Moment)=>boolean   | disabled seconds                                                                     |
| hideHours           | (hour:number, date:moment$Moment)=>boolean     | hidden hours                                                                         |
| hideMinutes         | (minute:number, date:moment$Moment)=>boolean   | hidden minutes                                                                       |
| hideSeconds         | (second:number, date:moment$Moment)=>boolean   | hidden seconds                                                                       |
| cleanable           | boolean `(true)`                               | whether the selected value can be cleared                                            |
| isoWeek             | boolean                                        | ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day |
| open                | boolean                                        | whether open the component                                                           |
| defaultOpen         | boolean                                        | default value of open property                                                       |
| placement           | enum: [Placement](#Placement) `('bottomLeft')` | placement of component                                                               |
| limitStartYear      | number `(5)`                                   | set an optional year limit relative to the current selection date                    |
| limitEndYear        | number `(5)`                                   | Sets the lower limit of the available year relative to the current selection date    |

## Types

### Range

```js
type Range = {
  label: React.Node,
  closeOverlay?: boolean,
  value: moment$Moment | ((date: moment$Moment) => moment$Moment)
};
```

### Placement

```js
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
```

## Default

### Locale

```js
const Locale = {
  sunday: 'Su',
  monday: 'Mo',
  tuesday: 'Tu',
  wednesday: 'We',
  thursday: 'Th',
  friday: 'Fr',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Today',
  yesterday: 'Yesterday',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds'
};
```

### Ranges

```js
const Ranges = [
  {
    label: 'today',
    value: moment$Moment(),
    closeOverlay: true
  },
  {
    label: 'yesterday',
    value: moment$Moment().add(-1, 'd'),
    closeOverlay: true
  }
];
```
