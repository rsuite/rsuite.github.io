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

### `<DateRangePicker>`

| Property             | Type`(default)`                                                                                                                                                                              | Description                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                                                                                                                                                      | Set picker appearence                                                                   |
| block                | boolean                                                                                                                                                                                      | Blocking an entire row                                                                  |
| cleanable            | boolean `(true)`                                                                                                                                                                             | Whether the selected value can be cleared                                               |
| container            | HTMLElement or (() => HTMLElement)                                                                                                                                                           | Sets the rendering container                                                            |
| defaultOpen          | boolean                                                                                                                                                                                      | Default value of open property                                                          |
| defaultValue         | Array&lt;Date&gt;                                                                                                                                                                          | Default value                                                                           |
| disabled             | boolean                                                                                                                                                                                      | Whether disabled the component                                                          |
| disabledDate         | (<br/>&nbsp;date: Date,<br/>&nbsp;selectDate: Array&lt;Date&gt;,<br/>&nbsp;selectedDone: boolean, <br/>&nbsp;target: 'CALENDAR', 'TOOLBAR_BUTTON_OK', 'TOOLBAR_SHORTCUT' <br/>)=>boolean | Disabled data                                                                           |
| hoverRange           | unions: 'week', 'month' or (date: Date)=> Array&lt;Date&gt;                                                                                                                              | The date range that will be selected when you click on the date                         |
| isoWeek              | boolean                                                                                                                                                                                      | ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day    |
| limitEndYear         | number `(1000)`                                                                                                                                                                              | Sets the lower limit of the available year relative to the current selection date       |
| onChange             | (`value`:Array&lt;Date&gt;)=>void                                                                                                                                                          | Callback fired when value changed                                                       |
| onClose              | ()=>void                                                                                                                                                                                     | Callback fired when close component                                                     |
| onOk                 | (`value`:Array&lt;Date&gt;)=>void                                                                                                                                                          | Callback fired when clicked OK button                                                   |
| onOpen               | ()=>void                                                                                                                                                                                     | Callback fired when open component                                                      |
| onSelect             | (date:Date)=>void                                                                                                                                                                          | Callback fired when date is selected                                                    |
| oneTap               | boolean                                                                                                                                                                                      | Whether to click once on selected date range，Can be used with [hoverRange](#clickmode) |
| open                 | boolean                                                                                                                                                                                      | whether open the component                                                              |
| placeholder          | string                                                                                                                                                                                       | Setting placeholders                                                                    |
| placement            | enum: [Placement](#types) `('bottomLeft')`                                                                                                                                                   | The placement of component                                                              |
| ranges               | Array<[Range](#types)> [`(Ranges)`](#Ranges)                                                                                                                                                 | Whortcut config，defeult: `Today`,`Yesterday`，`Last 7 days`                            |
| toggleComponentClass | React.ElementType `('a')`                                                                                                                                                                    | You can use a custom element for this component                                         |
| value                | Array&lt;Date&gt;                                                                                                                                                                          | Value (Controlled)                                                                      |



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
    value: [setTimingMargin(new Date()), setTimingMargin(new Date(), 'right')]
  },
  {
    label: 'yesterday',
    value: [setTimingMargin(addDays(new Date(),-1)), setTimingMargin(addDays(new Date(),-1), 'right')]
  },
  {
    label: 'last7Days',
    value: [setTimingMargin(subDays(new Date(), 6)), setTimingMargin(new Date(), 'right')]
  }
];
```
