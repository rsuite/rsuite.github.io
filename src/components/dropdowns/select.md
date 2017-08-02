### 模拟 Select

设置一个 `select` 属性。

```js
function handleSelect(eventKey) {
  console.log(eventKey);
}

const instance = (
  <Dropdown shape='default' activeKey="C" onSelect={handleSelect} select>
    <Dropdown.Item eventKey="A" >Item A</Dropdown.Item>
    <Dropdown.Item eventKey="B" >Item B</Dropdown.Item>
    <Dropdown.Item eventKey="C" >Item C</Dropdown.Item>
    <Dropdown.Item eventKey="D" >Item D</Dropdown.Item>
  </Dropdown>
);
ReactDOM.render(instance, mountNode);
```
