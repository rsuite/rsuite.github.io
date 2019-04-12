### Diasbeld and read only

<!--start-code-->

```js
const instance = (
  <Form>
    <FormGroup>
      <ControlLabel>disabled</ControlLabel>
      <FormControl value="React Suite" disabled />
    </FormGroup>

    <FormGroup>
      <ControlLabel>readOnly</ControlLabel>
      <FormControl value="React Suite" readOnly />
    </FormGroup>

    <FormGroup>
      <ControlLabel>plaintext</ControlLabel>
      <FormControl value="React Suite" plaintext />
    </FormGroup>
  </Form>
);

ReactDOM.render(instance);
```

<!--end-code-->
