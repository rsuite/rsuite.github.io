### 图标按钮

`<IconButton>` 是专为图标按钮设计的组件，设置`icon`属性定义所需要的图标。 只有图标按钮可以设置为一个圆形按钮。

<!--start-code-->
```js
const instance = (
  <div>
    <ButtonToolbar>
      <IconButton icon="star" />
      <IconButton icon="star" appearance="primary" />
      <ButtonGroup>
        <IconButton icon="align-left"  />
        <IconButton icon="align-center" />
        <IconButton icon="align-right" />
        <IconButton icon="align-justify" />
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton icon="facebook-official" color="blue" circle  />
      <IconButton icon="google-plus-circle" color="red" circle  />
      <IconButton icon="twitter" color="cyan" circle  />
      <IconButton icon="linkedin" color="blue" circle  />
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton icon="pause" placement="left">Pause</IconButton>
      <IconButton icon="arrow-right" placement="right">Next</IconButton>
    </ButtonToolbar>


    <ButtonToolbar>
      <IconButton icon={SvgIcons.component} >Component</IconButton>
    </ButtonToolbar>

  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->