
### 使用横向/网格列表

<!--start-code-->
```js
const  data= [
  '网页',
  '图片',
  '新闻',
  '视频',
];
const  items= [
  'item01',
  'item02',
  'item03',
  'item04',
  'item05',
  'item06',
  'item07',
  'item08',
  'item09',
  'item10',
];
const CustomBlock=({children})=>
   <div style={{ padding: '1em 2em',display:'inline-block' }}>
      {children}
   </div>;
const instance=
  <div>
    <List axis='x'>
      {
        data.map((data, index) =>
        <List.Item key={data} index={index}>
          <CustomBlock>{data}</CustomBlock>
        </List.Item>)
      }
    </List>
    <hr/>
    <List style={{width:550}} axis='xy'>
      {
        items.map((data, index) =>
        <List.Item key={data} index={index}>
          <CustomBlock>{data}</CustomBlock>
        </List.Item>)
      }
    </List>
  </div>;
  
ReactDOM.render(instance);

```
<!--end-code-->
