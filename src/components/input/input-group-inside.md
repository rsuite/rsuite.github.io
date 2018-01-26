### inside


<!--start-code-->
```js
const instance = (
  <div style={{width:300}}>

    <InputGroup inside>
      <Input />
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>

    <InputGroup inside>
      <Input />
      <InputGroup.Addon>
        <Icon icon="search" />
      </InputGroup.Addon>
    </InputGroup>

    <InputGroup inside>
       <InputGroup.Addon>
        <Icon icon="avatar" />
      </InputGroup.Addon>
      <Input />
    </InputGroup>

  </div>
);

ReactDOM.render(instance);
```
<!--end-code-->