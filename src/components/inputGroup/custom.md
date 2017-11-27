### 自定义前置、后置
可以是文字、input或者其他组件
```js
const instance = (
  <Form >
    <FormGroup>
      <InputGroup>
        <InputGroup.Button>
          <Button>Before</Button>
        </InputGroup.Button>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <Dropdown shape="default" activeKey="B" select componentClass={InputGroup.Button}>
          <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
          <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
          <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
        </Dropdown>
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>
          <input type="radio" aria-label="..." />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>
          <input type="checkbox" aria-label="..." />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance);
```