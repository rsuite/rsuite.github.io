### 初始文件列表

<!--start-code-->

```js
const fileList = [
  {
    name: 'file1.jpg',
    key: 1
  },
  {
    name: 'file2.jpg',
    key: 2
  }
];
const instance = <Uploader fileList={fileList} action="//jsonplaceholder.typicode.com/posts/" />;
ReactDOM.render(instance);
```

<!--end-code-->
