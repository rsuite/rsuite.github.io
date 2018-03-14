
### 默认

<!--start-code-->
```js
const instance = (
  <Grid fluid>
    <Row className="show-grid">
      <Col xs={24} md={16}>xs={24} md={16}</Col>
      <Col xs={12} md={8}>xs={12} md={8}</Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12} md={8}>xs={12} md={8}</Col>
      <Col xs={12} md={8}>xs={12} md={8}</Col>
      <Col xsHidden md={8}>xsHidden md={8}</Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12} xsOffset={12}>xs={12} xsOffset={12}</Col>
    </Row>

    <Row className="show-grid">
      <Col md={12} mdPush={12}>md={12} mdPush={12}</Col>
      <Col md={12} mdPull={12}>md={12} mdPull={12}</Col>
    </Row>
  </Grid>
);
ReactDOM.render(instance);
```
<!--end-code-->