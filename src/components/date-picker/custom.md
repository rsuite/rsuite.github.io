### 自定义快捷项

<!--start-code-->

```js
const instance = (
  <div className="field">
    <DatePicker
      ranges={[
        {
          label: '昨天',
          value: moment().add(-1, 'd')
        },
        {
          label: '今天',
          value: moment()
        },
        {
          label: '前一天',
          closeOverlay: false,
          value: datePage => {
            return moment(datePage).add(-1, 'd');
          }
        }
      ]}
    />
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->

示例中点击“前一天”，不会关闭浮层，是因为配置 `closeOverlay:boolean` 参数，该参数用于设置点击快捷项以后是否关闭浮层，默认为 `true`。
