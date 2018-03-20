import React from 'react';
import {
  Container,
  Content,
  Row,
  Col,
  ButtonToolbar,
  Button,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Toggle,
  Slider
} from '../../rsuiteSource';
import MarkdownView from '../../fixtures/MarkdownView';
import { SketchPicker, CirclePicker } from 'react-color';
import computeColors from './computeColors';
import ColorPanel from './ColorPanel';
import { loadJsFile } from '../../ready';

const lessUrl = 'https://cdn.bootcss.com/less.js/2.7.2/less.min.js';

class PalettePage extends React.Component {
  constructor() {
    super();
    this.lessLoaded = false;
    this.state = {
      color: '#2196f3'
    };
  }

  changeLessColor = (color) => {
    return window.less.modifyVars({
      '@palette-color': color
    });
  }

  handleChangeComplete = ({ hex: color }) => {
    this.setState({ color });
    if (this.lessLoaded) {
      this.changeLessColor(color);
    } else {
      // Less global config.
      window.less = {
        async: true,
        logLevel: 0,
        globalVars: {
          '@palette-color': this.state.color
        }
      };
      loadJsFile(lessUrl, () => {
        this.lessLoaded = true;
        this.changeLessColor(color);
      });
    }
  };

  render() {
    const { color } = this.state;
    return (
      <Content>
        <Row>
          <Col md={24}>
            <MarkdownView>{require('./readme.md')}</MarkdownView>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <CirclePicker color={color} onChangeComplete={this.handleChangeComplete} />
            <br />
            <br />
            <SketchPicker color={color} onChangeComplete={this.handleChangeComplete} />
          </Col>
          <Col md={8} className="panel-color-wrap">
            <ColorPanel colors={computeColors(color)} />
          </Col>

          <Col md={8} style={{ padding: 10 }} id="palettePreview">
            <ButtonToolbar>
              <Button appearance="default">Default</Button>
              <Button appearance="primary">Primary</Button>
              <Button appearance="link">Link</Button>
              <Button appearance="ghost">Ghost</Button>
            </ButtonToolbar>
            <hr />
            <CheckboxGroup name="check" defaultValue={['1', '2']}>
              <Checkbox value="1">javascript</Checkbox>
              <Checkbox value="2">css</Checkbox>
              <Checkbox value="3">html</Checkbox>
            </CheckboxGroup>
            <hr />
            <RadioGroup name="radio" defaultValue="1">
              <Radio value="1">Male</Radio>
              <Radio value="2">Female </Radio>
            </RadioGroup>
            <hr />
            <Toggle defaultChecked />
            <hr />
            <Slider progress defaultValue={50} />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default PalettePage;
