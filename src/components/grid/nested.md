### 嵌套

<!--start-code-->

```js
const instance = (
  <Grid fluid>
    <Row className="show-grid">
      <Col md={12}>
        <Row className="show-grid">
          <Col md={12}>
            <Row className="show-grid">
              <Col md={12}>md={12}</Col>
              <Col md={12}>md={12}</Col>
            </Row>
          </Col>
          <Col md={12}>
            <Row className="show-grid">
              <Col md={12}>md={12}</Col>
              <Col md={12}>md={12}</Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        <Row className="show-grid">
          <Col md={12}>
            <Row className="show-grid">
              <Col md={12}>md={12}</Col>
              <Col md={12}>md={12}</Col>
            </Row>
          </Col>
          <Col md={12}>
            <Row className="show-grid">
              <Col md={12}>md={12}</Col>
              <Col md={12}>md={12}</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
);
ReactDOM.render(instance);
```

<!--end-code-->
