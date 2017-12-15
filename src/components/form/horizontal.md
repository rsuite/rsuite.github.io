### 水平布局

<!--start-code-->
```js
var formLayoutInstance = (
  <Form horizontal>
    <FormGroup controlId='UserName'>
      <Col md={2} componentClass={ControlLabel} >
        Username
      </Col>
      <Col md={10}>
        <FormControl type='text' />
      </Col>
    </FormGroup>
    <FormGroup controlId='Password'>
      <Col md={2} componentClass={ControlLabel} >
        Password
            </Col>
      <Col md={10}>
        <FormControl type='password' />
      </Col>
    </FormGroup>

    <FormGroup controlId='radioList'>
      <Col md={2} componentClass={ControlLabel} >
        RadioGroup
            </Col>
      <Col md={10}>
        <RadioGroup name="radioList" value={1}>
          <Radio value={1} >Item A</Radio>
          <Radio value={2}>Item B</Radio>
          <Radio value={3}>Item C</Radio>
          <Radio value={4} disabled>Item D</Radio>
        </RadioGroup>
      </Col>
    </FormGroup>

    <FormGroup controlId='radioList'>
      <Col md={2} componentClass={ControlLabel} >
        RadioGroup
      </Col>
      <Col md={10}>
        <RadioGroup name="radioList" inline value={1}>
          <Radio value={1} >Item A</Radio>
          <Radio value={2}>Item B</Radio>
          <Radio value={3}>Item C</Radio>
          <Radio value={4} disabled>Item D</Radio>
        </RadioGroup>
      </Col>
    </FormGroup>

    <FormGroup controlId='checkboxList'>
      <Col md={2} componentClass={ControlLabel} >
        CheckboxGroup
      </Col>
      <Col md={10}>
        <CheckboxGroup name="checkboxList" inline>
          <Checkbox checked>Item A</Checkbox>
          <Checkbox>Item B</Checkbox>
          <Checkbox>Item C</Checkbox>
          <Checkbox disabled>Item D</Checkbox>
        </CheckboxGroup>
      </Col>
    </FormGroup>
  </Form>
);
ReactDOM.render(formLayoutInstance);

```
<!--end-code-->