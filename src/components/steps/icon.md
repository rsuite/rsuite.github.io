
### 自定义图标

<!--start-code-->
```js

const instance = (
  <Steps current={1}>
  <Steps.Step title='已完成' icon={<Icon icon='pencil-square' size="lg"/>} />
  <Steps.Step title='进行中' icon={<Icon icon='book' size="lg"/>} />
  <Steps.Step title='未完成' icon={<Icon icon='wechat' size="lg"/>} />
  <Steps.Step title='未完成' icon={<Icon icon='steam-square' size="lg"/>} />
</Steps>
);
ReactDOM.render(instance);
```
<!--end-code-->
