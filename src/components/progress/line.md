
### 线形进度

<!--start-code-->
```js
const { Line } = Progress;

class LineProgress extends React.Component {
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
      <div className='example'>
        <Line percent={this.state.percent} strokeColor={this.state.color} />
        <Button style={{marginTop:'20px'}} onClick={this.changeState}>刷新</Button>
      </div>
    );
  }
}

ReactDOM.render(<LineProgress />);

```
<!--end-code-->
