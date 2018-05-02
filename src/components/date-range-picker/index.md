# DateRangePicker 日期范围选择器

用于快速选择一个日期范围

* `<DateRangePicker>`

## 获取组件

```js
import { DateRangePicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<DateRangePicker`

| 属性名称       | 类型`(默认值)`                                                                                      | 描述                                                            |
| -------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| value          | Array<moment$Moment>                                                                                | 值 `受控`                                                       |
| defaultValue   | Array<moment$Moment>                                                                                | 默认值                                                          |
| onChange       | function(`value`:Array<moment$Moment>)                                                              | 值改变后的回调函数                                              |
| onOpen         | ()=>void                                                                                            | 打开回调函数                                                    |
| onClose        | ()=>void                                                                                            | 关闭回调函数                                                    |
| onOk           | function(`value`:Array<moment$Moment>)                                                              | 点击 `确定` 按钮后的回调函数                                    |
| placeholder    | string                                                                                              | 没有值时候默认显示内容                                          |
| locale         | Object [`(Locale)`](#Locale)                                                                        | 本地化对应的语言描述                                            |
| ranges         | Array<[Range](#Range)> [`(Ranges)`](#Ranges)                                                        | 快捷项配置，默认 `今天`,`昨天`，`最近 7 天`                     |
| disabled       | boolean                                                                                             | 禁用组件                                                        |
| disabledDate   | (date:moment$Moment, selectValue:Array<moment$Moment>, selectedDone:boolean, type:string )=>boolean | 禁用日期                                                        |
| hoverRange     | unions: "week", "month" or (date: moment$Moment)=> Array<moment$Moment>                             | 点击日期时将选中的日期范围                                      |
| oneTap         | boolean                                                                                             | 是否点击一次就选定日期范围，可[配合 hoverRange 使用](#单击模式) |
| cleanable      | boolean `(true)`                                                                                    | 可以清除选择值                                                  |
| isoWeek        | boolean                                                                                             | ISO 8601 标准， 每个日历星期从星期一开始，星期日为第 7 天       |
| open           | boolean                                                                                             | 打开 (受控)                                                     |
| defaultOpen    | boolean                                                                                             | 默认打开                                                        |
| placement      | enum: [Placement](#Placement) `('bottomLeft')`                                                      | 显示位置                                                        |
| limitStartYear | number `(5)`                                                                                        | 相对当前选择日期，设置可选年份上限                              |
| limitEndYear   | number `(5)`                                                                                        | 相对当前选择日期，设置可选年份下限                              |
| menuClassName  | string                                                                                              | 选项菜单的 className                                            |

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
  | 'rightBottom';
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
