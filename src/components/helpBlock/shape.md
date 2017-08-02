### 样式

```js
const instance = (
  <div>
    <FormControl />
    <HelpBlock shape="success">该字段验证成功</HelpBlock>
    <HelpBlock shape="warning">建议不要使用特殊字符</HelpBlock>
    <HelpBlock shape="danger">请输入正确的邮箱地址</HelpBlock>
    <HelpBlock shape="info">该字段为必填项</HelpBlock>
  </div>
);

ReactDOM.render(instance, mountNode);
```