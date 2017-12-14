### 单行布局
<!--start-code-->
```js
var formLayoutInstance = (
  <Form inline>
    <FormGroup controlId='username'>
      <ControlLabel>Username</ControlLabel>
      <FormControl type='text' />
    </FormGroup>

    <FormGroup controlId='checkboxList'>
      <ControlLabel>CheckboxGroup</ControlLabel>
      <CheckboxGroup name="checkboxList" inline>
        <Checkbox checked>Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
      </CheckboxGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(formLayoutInstance);
```
<!--end-code-->
