### 与 Router 中的 Link 组合

<!--start-code-->

```js
const NavLink = props => <Dropdown.Item componentClass={Link} {...props} />;

const instance = (
  <Dropdown title="Menu">
    <NavLink to="/guide/introduction">Guide</NavLink>
    <NavLink to="/components/overview">Components</NavLink>
    <NavLink to="/tools/palette">Tools</NavLink>
  </Dropdown>
);
ReactDOM.render(instance);
```

<!--end-code-->
