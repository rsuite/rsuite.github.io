
### Paragraph

<!--start-code-->
```js
const { Paragraph } = Placeholder;
const instance = 
  <div>
    <h3>Default:</h3>
    <Paragraph />
    <h3>You can also add a round or square icon to the left:</h3>
    <Paragraph graph='circle'/>
    <Paragraph graph='square'/>
    <h3>You can also customize the number of lines, spacing, etc.:</h3>
    <Paragraph rows={5} graph active/>
  </div>

ReactDOM.render(instance);

```
<!--end-code-->
