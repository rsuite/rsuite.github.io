### 内联表单

<!--start-code-->

```js
var instance = (
  <div>
    <Form layout="inline">
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <FormControl name="username" />
        <HelpBlock tooltip>Required</HelpBlock>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <FormControl name="password" type="password" />
      </FormGroup>

      <Button>Login</Button>
    </Form>
    <hr />

    <Form layout="inline">
      <FormGroup>
        <ControlLabel srOnly>Username</ControlLabel>
        <FormControl placeholder="Username" name="username" />
      </FormGroup>

      <FormGroup>
        <ControlLabel srOnly>Username</ControlLabel>
        <FormControl placeholder="Password" name="password" type="password" />
      </FormGroup>

      <Button>Login</Button>
    </Form>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
