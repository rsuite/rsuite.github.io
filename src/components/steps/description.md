
### 设置描述

<!--start-code-->
```js

const instance = (
  <Steps current={1}>
    <Steps.Item title='已完成' description='描述1' />
    <Steps.Item title='进行中' description='描述2' />
    <Steps.Item title='待运行' description='描述3' />
    <Steps.Item title='待运行' description='描述4' />
  </Steps>
);
ReactDOM.render(instance);
```
<!--end-code-->
