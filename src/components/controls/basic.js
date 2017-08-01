const instance = (
  <Form >
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

    <FormGroup controlId='checkbox'>
      <Checkbox checked > Checkbox</Checkbox>
    </FormGroup>

    <FormGroup>
      <Radio> Radio</Radio>
    </FormGroup>

    <FormGroup controlId='checkboxList'>
      <ControlLabel>CheckboxGroup</ControlLabel>
      <CheckboxGroup name="checkboxList">
        <Checkbox checked>Item A</Checkbox>
        <Checkbox>Item B</Checkbox>
        <Checkbox>Item C</Checkbox>
        <Checkbox disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>

    <FormGroup controlId='radioList'>
      <ControlLabel>RadioGroup</ControlLabel>
      <RadioGroup name="radioList" value="C">
        <Radio value="A">Item A</Radio>
        <Radio value="B">Item B</Radio>
        <Radio value="C">Item C</Radio>
        <Radio value="D" disabled>Item D</Radio>
      </RadioGroup>
    </FormGroup>

    <FormGroup controlId='checkboxList' >
      <ControlLabel>CheckboxGroup inline</ControlLabel>
      <CheckboxGroup name="checkboxList" value={['A', 'C']} inline>
        <Checkbox value="A">Item A</Checkbox>
        <Checkbox value="B">Item B</Checkbox>
        <Checkbox value="C">Item C</Checkbox>
        <Checkbox value="D" disabled>Item D</Checkbox>
      </CheckboxGroup>
    </FormGroup>

    <FormGroup controlId='radioList'>
      <ControlLabel>RadioGroup inline</ControlLabel>
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
