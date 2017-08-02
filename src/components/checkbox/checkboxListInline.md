### CheckboxGroup 内联


```js
const instance = (
  <Form>
    <FormGroup controlId='checkboxList' >
      <ControlLabel>CheckboxGroup inline</ControlLabel>
      <CheckboxGroup name="checkboxList" value={['A', 'C']} inline>
        <Checkbox value="A">Item A</Checkbox>
        <Checkbox value="B">Item B</Checkbox>
        <Checkbox value="C">Item C</Checkbox>
        <Checkbox value="D" disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance, mountNode);
```