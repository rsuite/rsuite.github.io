### 使用icon
可以前置或者后置 icon
```js
const instance = (
  <Form >
    <FormGroup>
      <InputGroup inside>
        <FormControl type="text" />
        <InputGroup.Addon>
          <IconFont icon="search" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <InputGroup inside>
        <InputGroup.Addon>
          <IconFont icon="avatar" classPrefix="icon" />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance, mountNode);
```