### 单行布局
<!--start-code-->
```js
var instance = (
  <Form inline>
    <FormGroup>
      <ControlLabel>Input</ControlLabel>
      <FormControl name="user"/>
    </FormGroup>

    <FormGroup>
      <ControlLabel>CheckboxGroup</ControlLabel>
      <FormControl
        name="checkbox"
        accepter={CheckboxGroup}
        inline
      >
        <Checkbox>Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
      </FormControl>

    </FormGroup>
  </Form>
);
ReactDOM.render(instance);
```
<!--end-code-->
