var formLayoutInstance = (
  <Form inline>
    <FormGroup controlId='username'>
      <ControlLabel>Username</ControlLabel>
      <FormControl type='text' />
    </FormGroup>
    <FormGroup controlId='Password'>
      <ControlLabel>Password</ControlLabel>
      <FormControl type='password' />
    </FormGroup>

    <FormGroup controlId='checkboxList'>
      <ControlLabel>CheckboxGroup</ControlLabel>
      <CheckboxGroup name="checkboxList" inline>
        <Checkbox checked>Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
      </CheckboxGroup>
    </FormGroup>

    <Button type="submit" shape="default">
      Submit
        </Button>
  </Form>
);
ReactDOM.render(formLayoutInstance, mountNode);
