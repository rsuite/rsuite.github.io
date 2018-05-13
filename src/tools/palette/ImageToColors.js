import React from 'react';
import PropTypes from 'prop-types';
import { Input, Panel, DOMHelper } from '../../rsuiteSource';
import { getDict } from '../../locales';

const dict = getDict();
const { getOffset } = DOMHelper;

function ImageColor(img) {
  this.canvas = document.createElement('canvas');
  this.canvas.width = img.width;
  this.canvas.height = img.height;
  this.context = this.canvas.getContext('2d');
  this.context.drawImage(img, 0, 0);
  this.accuracy = 5;
  this.progress = '';
  this.getColorByXY = function(x, y) {
    const imageData = this.context.getImageData(x, y, 1, 1);
    const arr = imageData.data.toString().split(',');

    let first = parseInt(arr[0]).toString(16);
    first = first.length === 2 ? first : first + first;

    let second = parseInt(arr[1]).toString(16);
    second = second.length === 2 ? second : second + second;

    let third = parseInt(arr[2]).toString(16);
    third = third.length === 2 ? third : third + third;

    let last = parseInt(arr.pop()) / 255;
    last = last.toFixed(0);

    let color = {};
    color['rgba'] = 'rgba(' + arr.join(',') + ',' + last + ')';
    color['#'] = '#' + first + second + third;

    return color;
  };
}

class ImageToColors extends React.Component {
  static propTypes = {
    onColorChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      imgData: null,
      imgPosition: { x: 0, y: 0 }
    };
  }
  handleChange = (value, event) => {
    const { onColorChange } = this.props;
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = e => {
      const imgData = e.target.result;
      const img = new Image();

      img.src = e.target.result;
      img.onload = () => {
        const imgColor = new ImageColor(img);
        const x = img.width / 2;
        const y = img.height / 2;
        this.setState({
          imgColor,
          imgData,
          imgPosition: { x, y }
        });
        onColorChange(imgColor.getColorByXY(x, y));
      };
    };
    fileReader.readAsDataURL(file);
  };
  handleClickImage = event => {
    const { imgColor } = this.state;
    const { onColorChange } = this.props;
    const offset = getOffset(this.img);
    const y = event.pageY - offset.top;
    const x = event.pageX - offset.left;
    this.setState({
      imgPosition: { x, y }
    });
    onColorChange(imgColor.getColorByXY(x, y));
  };
  render() {
    const { colors } = this.props;
    const { imgData, imgPosition } = this.state;
    const dotStyles = {
      left: imgPosition.x,
      top: imgPosition.y
    };

    return (
      <Panel header={<h3>{dict.palette.title}</h3>} bordered className="palette-logo-tool">
        <ul>
          <li>{dict.palette.step1}</li>
          <li>{dict.palette.step2}</li>
          <li>{dict.palette.step3}</li>
        </ul>
        <hr />
        <Input type="file" onChange={this.handleChange} style={{ width: 200 }} />
        {imgData ? (
          <div className="palette-image-preview">
            <img
              src={imgData}
              ref={ref => {
                this.img = ref;
              }}
              onClick={this.handleClickImage}
            />
            <div className="palette-image-position-dot" style={dotStyles} />
          </div>
        ) : null}
      </Panel>
    );
  }
}

export default ImageToColors;
