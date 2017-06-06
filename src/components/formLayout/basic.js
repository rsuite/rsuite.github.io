var formLayoutInstance = (
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
      <RadioGroup name="radioList" inline>
        <Radio checked>Item A</Radio>
        <Radio>Item B</Radio>
        <Radio>Item C</Radio>
        <Radio disabled>Item D</Radio>
      </RadioGroup>
    </FormGroup>

    <Button type="submit" shape="default">
      Submit
        </Button>
  </Form>
);
ReactDOM.render(formLayoutInstance, mountNode);
