
### 段落

<!--start-code-->
```js
const { Paragraph } = Placeholder;
const instance = 
  <div>
    <h3>默认的段落占位符：</h3>
    <Paragraph />
    <h3>您也可以在之前加上圆形或方形的图标：</h3>
    <Paragraph graph='circle'/>
    <Paragraph graph='square'/>
    <h3>除此之外还可以自定义行数、间距等：</h3>
    <Paragraph rows={5} graph active/>
  </div>
  
ReactDOM.render(instance);

```
<!--end-code-->
