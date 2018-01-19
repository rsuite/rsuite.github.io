
### 自定义图标

<!--start-code-->
```js

const instance = (
  <Steps current={1}>
  <Steps.Item title='已完成' icon={<Icon icon='pencil-square' size="lg"/>} />
  <Steps.Item title='进行中' icon={<Icon icon='book' size="lg"/>} />
  <Steps.Item title='未完成' icon={<Icon icon='wechat' size="lg"/>} />
  <Steps.Item title='未完成' icon={<Icon icon='steam-square' size="lg"/>} />
</Steps>
);
ReactDOM.render(instance);
```
<!--end-code-->
