### 默认

<!--start-code-->
```js
const instance = (
  <Form style={{width:300}}>
    <FormGroup>
      <ControlLabel>Username</ControlLabel>
      <FormControl name='name' />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl name='email' type="email" />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl name='password' type="password" />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Textarea</ControlLabel>
      <FormControl rows={5} name='textarea' componentClass="textarea" />
    </FormGroup>
  </Form>
);
ReactDOM.render(instance);
```
<!--end-code-->