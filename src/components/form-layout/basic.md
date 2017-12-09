### 默认布局

<!--start-code-->
```js
const instance = (
  <Form>
    <FormGroup controlId='username'>
      <ControlLabel>Username</ControlLabel>
      <FormControl type='text' />
    </FormGroup>
    <FormGroup controlId='Password'>
      <ControlLabel>Password</ControlLabel>
      <FormControl type='password' />
    </FormGroup>

    <FormGroup controlId='checkboxList' >
      <ControlLabel>CheckboxGroup</ControlLabel>
      <CheckboxGroup name="checkboxList" >
        <Checkbox checked>Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
        <Checkbox>Item C</Checkbox>
        <Checkbox disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>

    <FormGroup controlId='radioList'>
      <ControlLabel>RadioGroup inline</ControlLabel>
      <RadioGroup name="radioList" inline value={2}>
        <Radio value={1} >Item A</Radio>
        <Radio value={2}>Item B</Radio>
        <Radio value={3}>Item C</Radio>
        <Radio value={4} disabled>Item D</Radio>
      </RadioGroup>
    </FormGroup>

    <Button type="submit" shape="default">
      Submit
    </Button>
  </Form>
);
ReactDOM.render(instance);
```
<!--end-code-->