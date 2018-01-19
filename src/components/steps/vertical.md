
### 垂直布局

<!--start-code-->
```js

const styles = {
  width: '200px',
  display: 'inline-table'
};

const instance = (
  <div>
    <Steps current={1} direction="vertical" style={styles}>
      <Steps.Item title='已完成'/>
      <Steps.Item title='进行中'/>
      <Steps.Item title='待运行'/>
      <Steps.Item title='待运行'/>
    </Steps>

    <Steps current={1} direction="vertical" style={styles}>
      <Steps.Item title='已完成' description='描述1' />
      <Steps.Item title='进行中' description='描述2' />
      <Steps.Item title='待运行' description='描述3' />
      <Steps.Item title='待运行' description='描述4' />
    </Steps>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
