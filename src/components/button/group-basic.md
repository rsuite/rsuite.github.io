### 按钮组

<!--start-code-->

```js
const CustomButtonGroup = ({ appearance }) => (
  <ButtonToolbar>
    <ButtonGroup>
      <Button appearance={appearance}>Top</Button>
      <Button appearance={appearance}>Middle</Button>
      <Button appearance={appearance}>Bottom</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

const instance = (
  <div>
    <CustomButtonGroup />
    <CustomButtonGroup appearance="primary" />
    <CustomButtonGroup appearance="link" />
    <CustomButtonGroup appearance="subtle" />
    <CustomButtonGroup appearance="ghost" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
