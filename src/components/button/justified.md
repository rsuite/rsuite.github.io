### 等宽

按钮在按钮组中横向布局，并且等宽。

<!--start-code-->

```js
const CustomButtonGroup = ({ appearance })=>(
  <ButtonGroup justified>
    <Button appearance={appearance}>Top</Button>
    <Button appearance={appearance}>Middle</Button>
    <Button appearance={appearance}>Bottom</Button>
  </ButtonGroup>
)

const instance = (
  <ButtonToolbar>
    <CustomButtonGroup />
    <CustomButtonGroup appearance="primary" />
    <CustomButtonGroup appearance="link" />
    <CustomButtonGroup appearance="subtle" />
    <CustomButtonGroup appearance="ghost" />
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->