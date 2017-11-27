### Checkbox Group


<!--start-code-->
```js
const instance = (
  <Form>
    <FormGroup controlId='checkboxList'>
      <CheckboxGroup name="checkboxList">
        <p>Group1</p>
        <Checkbox defaultChecked >Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
        <p>Group2</p>
        <Checkbox>Item C</Checkbox>
        <Checkbox disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance);
```
<!--end-code-->