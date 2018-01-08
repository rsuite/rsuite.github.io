
### 延迟关闭

<!--start-code-->
```js

function open(){
  Notification.open({
      title: 'Notify',
      duration: 5000,
      description: <Paragraph size="short" />
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
