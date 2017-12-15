### 自定义 Input


<!--start-code-->
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
        <Dropdown activeKey="B" componentClass={Button}>
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
          <IconFont icon="avatar"  />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>

  </Form>
);
ReactDOM.render(instance);
```
<!--end-code-->