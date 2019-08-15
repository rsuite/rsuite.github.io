import React from 'react';
import Loadable from 'react-loadable';

const Sketch = Loadable({
  loader: () => import('react-color/lib/components/sketch/Sketch'),
  loading: () => <div>loading...</div>
});

class SketchPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const { color } = this.props;
    return (
      <div className="sketch-picker-wrapper">
        <div onClick={this.handleClick} className="sketch-color-review">
          <div style={{ background: color }} className="sketch-color-value" />
        </div>
        {this.state.displayColorPicker ? (
          <div className="sketch-picker-overlay">
            <div
              className="sketch-picker-backdrop"
              onClick={this.handleClose}
            />
            <Sketch {...this.props} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SketchPicker;
