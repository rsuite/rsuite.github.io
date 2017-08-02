### CheckboxGroup


```js
const instance = (
  <Form>
    <FormGroup controlId='checkboxList'>
      <ControlLabel>CheckboxGroup</ControlLabel>
      <CheckboxGroup name="checkboxList">
        <Checkbox checked>Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
        <Checkbox>Item C</Checkbox>
        <Checkbox disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance, mountNode);
```