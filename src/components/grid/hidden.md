### 隐藏栅格

<!--start-code-->

```js
const instance = (
  <Grid fluid>
    <Row className="show-grid">
      <Col mdHidden md={12}>
        mdHidden md={12}
      </Col>
      <Col xs={12} md={12}>
        xs={12} md={12}
      </Col>
    </Row>
  </Grid>
);
ReactDOM.render(instance);
```

<!--end-code-->
