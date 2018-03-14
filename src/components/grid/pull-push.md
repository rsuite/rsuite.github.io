### 栅格推拉

<!--start-code-->

```js
const instance = (
  <Grid fluid>
    <Row className="show-grid">
      <Col md={12} mdPush={12}>
        md={12} mdPush={12} `left`
      </Col>
      <Col md={12} mdPull={12}>
        md={12} mdPull={12} `right`
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={6}>md={6} `left`</Col>
      <Col md={6} mdPush={12}>
        md={6} mdPush={12} `right`
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={6} mdPush={18}>
        md={6} mdPush={18} `left`
      </Col>
      <Col md={6} mdPull={6}>
        md={6} mdPull={6} `right`
      </Col>
    </Row>
  </Grid>
);
ReactDOM.render(instance);
```

<!--end-code-->
