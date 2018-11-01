### 设置容器

<!--start-code-->

```js
class Demo extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          height: 200,
          overflow: 'auto',
          boxShadow: '#999 1px 1px 5px inset',
          padding: 50
        }}
        ref={ref => {
          this.container = ref;
        }}
      >
        <div
          style={{
            height: 500
          }}
        >
          <MultiCascader
            style={{ width: 224 }}
            container={() => {
              return this.container;
            }}
            data={data}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->
