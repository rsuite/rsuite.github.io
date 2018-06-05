# DateRangePicker

Used to quickly select a date range

* `<DateRangePicker>`

## Usage

```js
import { DateRangePicker } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<DateRangePicker`

| Property       | Type`(default)`                                                                                     | Description                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| value          | Array<moment$Moment>                                                                                | Value (Controlled)                                                                      |
| defaultValue   | Array<moment$Moment>                                                                                | Default value                                                                           |
| onChange       | function(`value`:Array<moment$Moment>)                                                              | Callback fired when value changed                                                       |
| onOpen         | ()=>void                                                                                            | Callback fired when open component                                                      |
| onClose        | ()=>void                                                                                            | Callback fired when close component                                                     |
| onOk           | function(`value`:Array<moment$Moment>)                                                              | Callback fired when clicked OK button                                                   |
| placeholder    | string                                                                                              | Setting placeholders                                                                    |
| ranges         | Array<[Range](#Range)> [`(Ranges)`](#Ranges)                                                        | Whortcut config，defeult: `Today`,`Yesterday`，`Last 7 days`                            |
| disabled       | boolean                                                                                             | Whether disabled the component                                                          |
| disabledDate   | (date:moment$Moment, selectValue:Array<moment$Moment>, selectedDone:boolean, type:string )=>boolean | Disabled data                                                                           |
| hoverRange     | unions: "week", "month" or (date: moment$Moment)=> Array<moment$Moment>                             | The date range that will be selected when you click on the date                         |
| oneTap         | boolean                                                                                             | Whether to click once on selected date range，Can be used with [hoverRange](#clickmode) |
| cleanable      | boolean `(true)`                                                                                    | Whether the selected value can be cleared                                               |
| isoWeek        | boolean                                                                                             | ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day    |
| open           | boolean                                                                                             | whether open the component                                                              |
| defaultOpen    | boolean                                                                                             | Default value of open property                                                          |
| placement      | enum: [Placement](#Placement) `('bottomLeft')`                                                      | The placement of component                                                              |
| limitStartYear | number `(5)`                                                                                        | Set an optional year limit relative to the current selection date                       |
| limitEndYear   | number `(5)`                                                                                        | Sets the lower limit of the available year relative to the current selection date       |

## Types

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
  | 'rightBottom'
  | 'auto'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';
```

### Range

```js
type Range = {
  label: React.Node,
  closeOverlay?: boolean,
  value: moment$Moment | ((date: moment$Moment) => moment$Moment)
};
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
  last7Days: 'Last 7 Days',
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
    value: [setTimingMargin(moment()), setTimingMargin(moment(), 'right')]
  },
  {
    label: 'yesterday',
    value: [setTimingMargin(moment().add(-1, 'd')), setTimingMargin(moment().add(-1, 'd'), 'right')]
  },
  {
    label: 'last7Days',
    value: [setTimingMargin(moment().subtract(6, 'days')), setTimingMargin(moment(), 'right')]
  }
];
```
