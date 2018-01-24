### 按钮


<!--start-code-->
```js
const instance = (
  <div style={{width:300}}>


    <InputGroup>
      <Input />
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>



    <InputGroup inside>
      <Input />
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>

  </div>
);

ReactDOM.render(instance);
```
<!--end-code-->