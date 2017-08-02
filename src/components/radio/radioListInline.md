### Radio Group 内联


```js
const instance = (
  <Form>
    <FormGroup controlId='radioList'>
      <RadioGroup name="radioList" value="C" inline>
        <Radio value="A">Item A</Radio>
        <Radio value="B">Item B</Radio>
        <Radio value="C">Item C</Radio>
        <Radio value="D" disabled>Item D</Radio>
      </RadioGroup>
    </FormGroup>
  </Form>
);
ReactDOM.render(instance, mountNode);
```