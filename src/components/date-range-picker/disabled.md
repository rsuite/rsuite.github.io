### 禁用

<!--start-code-->

```js
const {
  allowedMaxDays,
  allowedDays,
  allowedRange,
  beforeToday,
  afterToday,
  combine
} = DateRangePicker;

const Demo = props => (
  <div className="field">
    <h5>禁用组件</h5>
    <DateRangePicker disabled />

    <hr />
    <h5>自定义禁用</h5>
    <DateRangePicker disabledDate={date => isAfter(date, new Date())} />

    <hr />
    <h5>允许最多选择 7 天，其他日期都禁用</h5>
    <DateRangePicker disabledDate={allowedMaxDays(7)} />

    <hr />
    <h5>只允许选择 7 天，其他日期都禁用</h5>
    <DateRangePicker disabledDate={allowedDays(7)} />

    <hr />
    <h5>只允许一个日期范围，其他日期都禁用</h5>
    <DateRangePicker disabledDate={allowedRange('2018-12-01', '2019-10-1')} />

    <hr />
    <h5>禁用今天之前的日期</h5>
    <DateRangePicker disabledDate={beforeToday()} />

    <hr />
    <h5>禁用今天之后的日期</h5>
    <DateRangePicker disabledDate={afterToday()} />

    <hr />
    <h5>组合: 允许最多选择 7 天, 同时禁用今天之前的日期，其他日期都禁用</h5>
    <DateRangePicker disabledDate={combine(allowedMaxDays(7), beforeToday())} />
  </div>
);

ReactDOM.render(<Demo />);
```

<!--end-code-->

`disabledDate` 是一个函数类型属性，它会在渲染日历以及选择日期的地方调用，可以根据业务自定义需要禁用的选项。格式如下：

```ts
disabledDate(
 date: Date,              // 用于判断是否需要禁用的日期
 selectDate: Array<Date>, // 选择的日期
 selectedDone: boolean,     // 当前是否选择完成。如果为 false, 则只选择了开始日期，等待选择结束日期
 target: 'CALENDAR', 'TOOLBAR_BUTTON_OK', 'TOOLBAR_SHORTCUT'   // disabledDate 调用的位置
) => boolean
```

为了更方便的设置需要禁用的日期，`DateRangePicker` 提供一些方法方便调用，示例:

```ts
import { DateRangePicker } from 'rsuite';

const { combine, allowedMaxDays, beforeToday } = DateRangePicker;

ReactDOM.render(
  <DateRangePicker disabledDate={combine(allowedMaxDays(7), beforeToday())} />
);
```

**allowedMaxDays**

允许指定的最多天数，其他日期都禁用

```ts
allowedMaxDays(days: number) => boolean
```

**allowedDays**

只允许指定的天数，其他日期都禁用

```ts
allowedDays(days: number) => boolean
```

**allowedRange**

允许指定的日期范围，其他日期都禁用

```ts
allowedRange( startDate: string | Date, endDate: string | Date) => boolean
```

**after**

禁用指定日期之后的日期

```ts
after(date?: string | Date) => boolean
```

**afterToday**

禁用今天之后的日期

```ts
afterToday() => boolean
```

**before**

禁用指定日期之前的日期

```ts
before(date?: string | Date) => boolean
```

**beforeToday**

禁用今天之前的日期

```ts
beforeToday() => boolean
```

**combine**

用于组合多个条件

```ts
combine(...) => boolean
```
