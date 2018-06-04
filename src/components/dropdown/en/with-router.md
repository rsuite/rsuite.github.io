### Used with `Link` in `react-router`

<!--start-code-->

```js
const NavLink = props => <Dropdown.Item componentClass={Link} {...props} />;

const instance = (
  <Dropdown title="Menu">
    <NavLink to="/en/guide/introduction">Guide</NavLink>
    <NavLink to="/en/components/overview">Components</NavLink>
    <NavLink to="/en/tools/palette">Tools</NavLink>
  </Dropdown>
);
ReactDOM.render(instance);
```

<!--end-code-->
