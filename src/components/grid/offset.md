### 偏移

<!--start-code-->

```js
const instance = (
  <Grid fluid>
    <Row className="show-grid">
      <Col md={4} mdOffset={20}>
        md={4} mdOffset={20}
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={8} mdOffset={16}>
        md={8} mdOffset={16}
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={12} mdOffset={12}>
        md={12} mdOffset={12}
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={16} mdOffset={8}>
        md={16} mdOffset={8}
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={20} mdOffset={4}>
        md={20} mdOffset={4}
      </Col>
    </Row>
  </Grid>
);
ReactDOM.render(instance);
```

<!--end-code-->
