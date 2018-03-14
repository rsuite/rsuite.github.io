### 栅格间隔

<!--start-code-->

```js
const instance = (
  <Grid fluid>
    <Row gutter={16}>
      <Col md={4}>
        <div className="show-col">md={4}</div>
      </Col>
      <Col md={4}>
        <div className="show-col">md={4}</div>
      </Col>
      <Col md={4}>
        <div className="show-col">md={4}</div>
      </Col>
      <Col md={4}>
        <div className="show-col">md={4}</div>
      </Col>
      <Col md={4}>
        <div className="show-col">md={4}</div>
      </Col>
      <Col md={4}>
        <div className="show-col">md={4}</div>
      </Col>
    </Row>
  </Grid>
);
ReactDOM.render(instance);
```

<!--end-code-->
