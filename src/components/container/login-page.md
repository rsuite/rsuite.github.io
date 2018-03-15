### 登录页布局

<!--start-code-->

```js
const instance = (
  <Container>
    <Header>
      <h1>Brand</h1>
    </Header>
    <Content>
      <FlexboxGird justify="center">
        <FlexboxGird.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
              </FormGroup>
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="primary">Login</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Panel>
        </FlexboxGird.Item>
      </FlexboxGird>
    </Content>
    <Footer>Footer</Footer>
  </Container>
);
ReactDOM.render(instance);
```

<!--end-code-->
