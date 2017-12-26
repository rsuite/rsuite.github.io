
### 彩色按钮

`color` 属性设置按钮样式，选项包括: 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'

<!--start-code-->
```js
const instance = (
  <div>
    <ButtonToolbar>
      <Button color="red">Red</Button>
      <Button color="orange">Orange</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="green">Green</Button>
      <Button color="cyan">Cyan</Button>
      <Button color="blue">Blue</Button>
      <Button color="violet">Violet</Button>
    </ButtonToolbar>

    <ButtonToolbar style={{background:'#000',padding:10}}>
      <Button color="red" ghost>Red</Button>
      <Button color="orange" ghost>Orange</Button>
      <Button color="yellow" ghost>Yellow</Button>
      <Button color="green" ghost>Green</Button>
      <Button color="cyan" ghost>Cyan</Button>
      <Button color="blue" ghost>Blue</Button>
      <Button color="violet" ghost>Violet</Button>
    </ButtonToolbar>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->