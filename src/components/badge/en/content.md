### With content

<!--start-code-->

```js
const instance = (
  <div>
    <Badge content={999}>
      <Button>New Message</Button>
    </Badge>

    <Badge style={{ marginLeft: 20 }} content="NEW">
      <Button>New Message</Button>
    </Badge>
  </div>
);

ReactDOM.render(instance);
```

<!--end-code-->
