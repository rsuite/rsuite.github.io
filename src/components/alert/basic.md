
### 默认

<!--start-code-->
```js
const instance = (
  <ButtonToolbar>
    <Button onClick={()=>Alert.info('Info')}> Info </Button>
    <Button onClick={()=>Alert.success('Success')}> Success </Button>
    <Button onClick={()=>Alert.warning('Warning')}> Warning </Button>
    <Button onClick={()=>Alert.error('Error')}> Error </Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
