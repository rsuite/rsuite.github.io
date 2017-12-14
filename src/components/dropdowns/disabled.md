### 禁用

可以禁用整个组件，也可以禁用单个选项，只需配置 `disabled` 属性。

<!--start-code-->
```js
const instance = (
  <div>
    <Dropdown title="Default" disabled>
        <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
        <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
        <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
    </Dropdown>
      <Dropdown title="Default" >
        <Dropdown.Item eventKey="A" disabled>Item A</Dropdown.Item>
        <Dropdown.Item eventKey="B" disabled>Item B</Dropdown.Item>
        <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
    </Dropdown>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->

