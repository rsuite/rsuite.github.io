
### 消息框撑满容器

<!--start-code-->
```js

const styles={
  background:'#000',
  padding:20,
  position:'relative'
};

const instance = (
 <div style={styles}>
    <Message
      full
      showIcon
      type="warning"
      description="Warning"
    />
    <Paragraph />
    <Paragraph />
    <Paragraph />
 </div>
);
ReactDOM.render(instance);
```
<!--end-code-->
