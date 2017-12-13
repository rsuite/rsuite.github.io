### 多选框组

<!--start-code-->
```js
const instance = (
  <Form>
    <FormGroup controlId='checkboxList'>
      <CheckboxGroup
        name="checkboxList"
        onChange={(value)=>{
          console.log(value,'onChange');
        }}
        >
        <p>Group1</p>
        <Checkbox defaultChecked value={1} >Item A</Checkbox>
        <Checkbox value={2}>Item B</Checkbox>
        <p>Group2</p>
        <Checkbox value={3}>Item C</Checkbox>
        <Checkbox value={4} disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance);
```
<!--end-code-->