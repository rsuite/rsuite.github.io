
### 圆形进度

<!--start-code-->
```js
const { Circle } = Progress;

class CircleProgress extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 30,
      color: '#3385ff',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    const colorMap = ['#3385ff', '#85d262', '#FE8C6A'];
    const value = parseInt(Math.random() * 100, 10);
    this.setState({
      percent: value,
      color: colorMap[parseInt(Math.random() * 3, 10)],
    });
  }
  render() {
    return (
      <div style={{width:'200px'}}>

        <Circle
          percent={this.state.percent}
          strokeWidth="3"
          trailWidth="2"
          strokeColor={this.state.color}
        />
        <Button style={{marginTop:'10px'}} onClick={this.changeState}>刷新</Button>
      </div>
    );
  }
}

ReactDOM.render(<CircleProgress />);
```
<!--end-code-->