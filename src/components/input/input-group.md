### 输入框组合


<!--start-code-->
```js
const instance = (
  <div style={{width:300}}>
    <InputGroup>
      <InputGroup.Addon> @</InputGroup.Addon>
      <Input />
    </InputGroup>

    <InputGroup>
      <Input />
      <InputGroup.Addon>.com</InputGroup.Addon>
    </InputGroup>

    <InputGroup>
      <InputGroup.Addon>$</InputGroup.Addon>
      <Input />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>

    <InputGroup>
      <Input />
      <InputGroup.Addon>to</InputGroup.Addon>
      <Input />
    </InputGroup>

    <InputGroup>
      <Input />
      <InputGroup.Addon><Icon icon="search" /></InputGroup.Addon>
    </InputGroup>

    <InputGroup>
      <InputGroup.Addon><Icon icon="avatar" /></InputGroup.Addon>
      <Input />
    </InputGroup>
  </div>
);

ReactDOM.render(instance);
```
<!--end-code-->