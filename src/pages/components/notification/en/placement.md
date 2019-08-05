
### Placement

<!--start-code-->
```js

function open(placement){
  Notification.open({
      title: placement,
      placement,
      description: <Paragraph style={{ width: 320 }} rows={3} />
  });
}

const instance = (
  <ButtonToolbar>
    <Button onClick={()=>open('topLeft')}> Top Left </Button>
    <Button onClick={()=>open('topRight')}> Top Right </Button>
    <Button onClick={()=>open('bottomLeft')}> Bottom Left </Button>
    <Button onClick={()=>open('bottomRight')}> Bottom Right </Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->
