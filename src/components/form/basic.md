### 基础表单控件
可以通过为 `<FormControl>` 设置 `type` 属性来改变表单控件的类型。
<!--start-code-->
```js
const instance = (
  <Form>
    <FormGroup controlId='username'>
      <ControlLabel>Text</ControlLabel>
      <FormControl type='text' />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup controlId='email'>
      <ControlLabel>Email</ControlLabel>
      <FormControl type='email' />
    </FormGroup>
    <FormGroup controlId='number'>
      <ControlLabel>Number</ControlLabel>
      <FormControl type='number' />
    </FormGroup>
    <FormGroup controlId='file'>
      <ControlLabel>File</ControlLabel>
      <FormControl type='file' />
    </FormGroup>

    <FormGroup controlId='select'>
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass='select'>
        <option value='A'>Option A</option>
        <option value='B'>Option B</option>
        <option value='C'>Option C</option>
        <option value='D'>Option D</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId='textarea'>
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" />
    </FormGroup>
</Form>
);
ReactDOM.render(instance);
```
<!--end-code-->