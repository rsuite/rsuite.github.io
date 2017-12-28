
### 默认

<!--start-code-->
```js

function open(){
  Notification.open({
      title: 'Notify',
      description: `
        long long long long long error message
        long long long long long error message
      `
  });
}

const instance = (
  <ButtonToolbar>
    <Button onClick={open}> Open </Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
