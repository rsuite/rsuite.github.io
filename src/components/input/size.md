### 尺寸

<!--start-code-->
```js

const CustomInput=({...props})=>(
  <Input
    {...props}
    style={{ width:300 }}
  />
)

const instance = (
 <div>
    <CustomInput size="lg" placeholder="Large" />
    <CustomInput size="md" placeholder="Medium" />
    <CustomInput size="sm" placeholder="Small" />
    <CustomInput size="xs" placeholder="Xsmall" />
 </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
