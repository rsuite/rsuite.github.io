<!--start-code-->
```js
const instance = (
  <div className='icon-example-list'>
    <h5>图标</h5>
    <IconFont icon='star' />
    <h5>动态图标</h5>
    <IconFont icon='spinner' spin />
    <IconFont icon='spinner' pulse />
    <IconFont icon='cog' spin />
    <h5>旋转和翻转</h5>
    <IconFont icon='shield' rotate={90} />
    <IconFont icon='shield' rotate={180} />
    <IconFont icon='shield' rotate={270} />
    <IconFont icon='shield' flip="horizontal" />
    <IconFont icon='shield' flip="vertical" />
    <h5>放大图标</h5>
    <IconFont icon='camera-retro' size="lg" />
    <IconFont icon='camera-retro' size="2x" />
    <IconFont icon='camera-retro' size="3x" />
    <IconFont icon='camera-retro' size="4x" />
    <IconFont icon='camera-retro' size="5x" />
    <h5>叠加图标</h5>
    <span className="icon-stack icon-lg">
      <IconFont icon='square' stack='2x' />
      <IconFont icon='terminal' stack='1x' className='icon-inverse' />
    </span>
    <span className="icon-stack icon-lg">
      <IconFont icon='camera' stack='1x' />
      <IconFont icon='ban' stack='2x' className='text-danger' />
    </span>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
