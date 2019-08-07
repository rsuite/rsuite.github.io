### Custom separator

<!--start-code-->

```js
const instance = (
  <div>
    <Breadcrumb separator={'-'}>
      <Breadcrumb.Item componentClass={Link} to="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item componentClass={Link}>Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb separator={'>'}>
      <Breadcrumb.Item componentClass={Link} to="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item componentClass={Link}>Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb separator={<Icon icon="angle-right" />}>
      <Breadcrumb.Item componentClass={Link} to="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item componentClass={Link}>Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
