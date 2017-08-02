### 基本用法
用于搭配一些固定组合
```js
const instance = (
  <Form >
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon> @</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>$</InputGroup.Addon>
        <FormControl type="text" />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>至</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance, mountNode);
```