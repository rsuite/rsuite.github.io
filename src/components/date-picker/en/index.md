# DatePicker

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

| Property              | Type`(default)`                                | Description                                                                          |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| appearance            | enum: 'default', 'subtle' `('default')`        | Set picker appearence                                                                |
| block                 | boolean                                        | Blocking an entire row                                                               |
| value                 | Moment                                         | Value (Controlled)                                                                   |
| defaultValue          | Moment                                         | Default value                                                                        |
| calendarDefaultDate   | Moment                                         | Calendar panel default presentation date and time                                    |
| onChange              | (date:Moment)=>void                            | Callback fired when value changed                                                    |
| onChangeCalendarDate  | (date: Moment, event?: SyntheticEvent) => void | Callback function that changes the calendar date.                                    |
| onSelect              | (date:Moment)=>void                            | Callback fired when date or time is selected                                         |
| onOpen                | ()=>void                                       | Callback fired when open component                                                   |
| onClose               | ()=>void                                       | Callback fired when close component                                                  |
| onHide                | ()=>void                                       | Callback fired when hidden                                                           |
| onToggleMonthDropdown | (open: boolean) => void                        | Callback function that switches to the month view                                    |
| onToggleTimeDropdown  | (open: boolean) => void                        | Callback function that switches to the time view                                     |
| onPrevMonth           | (date: Moment) => void                         | Switch to the callback function for the previous Month                               |
| onNextMonth           | (date: Moment) => void                         | Switch to the callback function for the next Month                                   |
| onOk                  | (date: Moment, event: SyntheticEvent) => void  | Click the OK callback function                                                       |
| placeholder           | string                                         | Placeholder                                                                          |
| format                | string `('YYYY-MM-DD')`                        | Format date                                                                          |
| locale                | Object [`(Locale)`](#Locale)                   | i18n config                                                                          |
| ranges                | Array<[Range](#Range)> [`(Ranges)`](#Ranges)   | Shortcut config                                                                      |
| inline                | boolean                                        | Display date panel when component initial                                            |
| disabled              | boolean                                        | Whether disabled the component                                                       |
| disabledDate          | (date:Moment)=>boolean                         | Disabled date                                                                        |
| disabledHours         | (hour:number, date:Moment)=>boolean            | Disabled hours                                                                       |
| disabledMinutes       | (minute:number, date:Moment)=>boolean          | Disabled minutes                                                                     |
| disabledSeconds       | (second:number, date:Moment)=>boolean          | Disabled seconds                                                                     |
| hideHours             | (hour:number, date:Moment)=>boolean            | Hidden hours                                                                         |
| hideMinutes           | (minute:number, date:Moment)=>boolean          | Hidden minutes                                                                       |
| hideSeconds           | (second:number, date:Moment)=>boolean          | Hidden seconds                                                                       |
| cleanable             | boolean `(true)`                               | Whether the selected value can be cleared                                            |
| isoWeek               | boolean                                        | ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day |
| open                  | boolean                                        | Whether open the component                                                           |
| defaultOpen           | boolean                                        | Default value of open property                                                       |
| placement             | enum: [Placement](#Placement) `('bottomLeft')` | The placement of component                                                           |
| limitStartYear        | number `(5)`                                   | Set an optional year limit relative to the current selection date                    |
| limitEndYear          | number `(5)`                                   | Set the lower limit of the available year relative to the current selection date     |
| container             | HTMLElement or (() => HTMLElement)             | Sets the rendering container                                                         |
| toggleComponentClass  | React.ElementType `('a')`                      | You can use a custom element for this component                                      |

## Types

### Range

```js
type Range = {
  label: React.Node,
  closeOverlay?: boolean,
  value: Moment | ((date: Moment) => Moment)
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
  | 'rightBottom'
  | 'auto'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';
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
    value: Moment(),
    closeOverlay: true
  },
  {
    label: 'yesterday',
    value: Moment().add(-1, 'd'),
    closeOverlay: true
  }
];
```
