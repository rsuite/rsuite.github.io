
### 延迟关闭

<!--start-code-->
```js
const instance = (
  <ButtonToolbar>
    <Button onClick={()=>Alert.info('Info', 5000)}> Info </Button>
    <Button onClick={()=>Alert.success('Success', 5000)}> Success </Button>
    <Button onClick={()=>Alert.warning('Warning', 5000)}> Warning </Button>
    <Button onClick={()=>Alert.error('Error', 5000)}> Error </Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->