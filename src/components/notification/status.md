
### 通知类型

<!--start-code-->
```js

function open(funcName){
  Notification[funcName]({
      title: funcName,
      description: <Paragraph size="short" />
  });
}

const instance = (
  <ButtonToolbar>
    <Button onClick={()=>open('info')}> Info </Button>
    <Button onClick={()=>open('success')}> Success </Button>
    <Button onClick={()=>open('warning')}> Warning </Button>
    <Button onClick={()=>open('error')}> Error </Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
