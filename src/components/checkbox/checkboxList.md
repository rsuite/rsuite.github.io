### Checkbox Group


```js
const instance = (
  <Form>
    <FormGroup controlId='checkboxList'>
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