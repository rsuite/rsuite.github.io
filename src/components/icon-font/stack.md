### 叠加图标
<!--start-code-->
```js
const instance = (
  <div className='icon-example-list'>
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
