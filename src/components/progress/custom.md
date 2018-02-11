### 自定义样式

<!--start-code-->
```js

const { Line, Circle } = Progress;

class CustomProgress extends React.Component {
  render() {
    const circleStyle = {
      width:'150px',
      display:'inline-block',
      marginRight:'40px'
    };
    const lineStyle = {
      marginTop:'10px'
    };

    return (
      <div>
        <div style={circleStyle}>
          <Circle
            percent={30}
            strokeWidth={4}
            gapPosition="top"
            strokeColor="#3385ff"
          />
        </div>
        <div style={circleStyle}>
          <Circle
            status='success'
            percent={40}
            strokeWidth={2}
            gapPosition="bottom"
            strokeColor="#85d262"
          />
        </div>
        <div style={circleStyle}>
          <Circle
            percent={50}
            strokeWidth={6}
            trailWidth={6}
            gapPosition="left"
            strokeColor="#3fc7fa"
            trailColor="#ccc"
            strokeLinecap="square"
            infoShow={false}
          />
        </div>
        <div style={circleStyle}>
          <Circle
            percent={60}
            strokeWidth={10}
            gapPosition="right"
            strokeColor="#fbde0b"
            trailColor="#fff"
          />
        </div>

         <div style={lineStyle}>
          <Line
            percent={30}
            strokeColor="#3385ff"
          />
        </div>
        <div style={lineStyle}>
          <Line
            percent={70}
            strokeColor="#f04631"
            infoShow={false}
            status='fail'
          />
        </div>
        <div style={lineStyle}>
          <Line
            percent={100}
            strokeColor="#66bc5c"
            status='success'
          />
        </div>
        <div style={lineStyle}>
          <Line
            percent={50}
            strokeColor="#3fc7fa"
            trailColor="#ccc"
            infoShow={false}
          />
        </div>

      </div>
    );
  }
}

ReactDOM.render(<CustomProgress />);

```
<!--end-code-->
