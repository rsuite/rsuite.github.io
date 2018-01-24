### 尺寸

<!--start-code-->
```js

const CustomInput=({...props})=>(
  <Input
    {...props}
    style={{ width:300 }}
  />
)

const CustomInputGroup=({placeholder,...props})=>(
  <InputGroup {...props} style={{ width:300 }} >
    <Input placeholder={placeholder} />
    <InputGroup.Addon><Icon icon="search" /></InputGroup.Addon>
  </InputGroup>
)

const instance = (
 <div>

    <CustomInput size="lg" placeholder="Large" />
    <CustomInput size="md" placeholder="Medium" />
    <CustomInput size="sm" placeholder="Small" />
    <CustomInput size="xs" placeholder="Xsmall" />
    <hr />
    <CustomInputGroup size="lg" placeholder="Large" />
    <CustomInputGroup size="md" placeholder="Medium" />
    <CustomInputGroup size="sm" placeholder="Small" />
    <CustomInputGroup size="xs" placeholder="Xsmall" />
 </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
