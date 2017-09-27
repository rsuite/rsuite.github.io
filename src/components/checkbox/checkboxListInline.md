### Checkbox Group 内联


```js
const instance = (
  <Form>
    <FormGroup controlId='checkboxList'>
      <CheckboxGroup
          inline
          name="checkboxList"
          defaultValue={['A', 'C']}
          onChange={(value)=>{
            console.log(value,'onChange');
          }}
        >
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