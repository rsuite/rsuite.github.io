### 叠加图标
<!--start-code-->
```js
const instance = (
  <div className='icon-example-list'>
    <span className="icon-stack icon-lg">
      <Icon icon='square' stack='2x' />
      <Icon icon='terminal' stack='1x' className='icon-inverse' />
    </span>
    <span className="icon-stack icon-lg">
      <Icon icon='camera' stack='1x' />
      <Icon icon='ban' stack='2x' className='text-danger' />
    </span>
  </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
