var instance = (
  <Breadcrumb>
    <Breadcrumb.Item componentClass={Link} to="/">
      Home
        </Breadcrumb.Item>
    <Breadcrumb.Item componentClass={Link} to="/components">
      Components
        </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Breadcrumb
        </Breadcrumb.Item>
  </Breadcrumb>
);
ReactDOM.render(instance, mountNode);
