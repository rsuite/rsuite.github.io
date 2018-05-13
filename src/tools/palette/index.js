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
  Slider,
  Nav,
  Input,
  Panel
} from '../../rsuiteSource';
import MarkdownView from '../../fixtures/MarkdownView';
import { SketchPicker, CirclePicker } from 'react-color';
import computeColors from './computeColors';
import ColorPanel from './ColorPanel';
import ImageToColors from './ImageToColors';
import { loadJsFile } from '../../ready';
import LOCALE_ENV from '../../LOCALE_ENV';

const localePath = LOCALE_ENV === 'en' ? `${name}/en/` : `${name}/`;
const lessUrl = 'https://cdn.bootcss.com/less.js/2.7.2/less.min.js';

class PalettePage extends React.Component {
  constructor() {
    super();
    this.lessLoaded = false;
    this.state = {
      color: '#2196f3'
    };
  }

  /**
   * @param color
   * @return {Promise}
   */
  changeLessColor = color => {
    return window.less.modifyVars({
      '@palette-color': color
    });
  };

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
            <MarkdownView>{require(`.${localePath}index.md`)}</MarkdownView>
          </Col>
        </Row>

        <div className="palette-wrapper">
          <div className="palette-panel">
            <CirclePicker color={color} onChangeComplete={this.handleChangeComplete} />
            <br />
            <SketchPicker
              style={{ marginTop: 6 }}
              color={color}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
          <div className="panel-color-wrap">
            <ColorPanel colors={computeColors(color)} />
          </div>

          <div className="palette-preview" id="palettePreview">
            <Panel header={<h3>Preview</h3>} bordered>
              <ButtonToolbar>
                <Button appearance="default">Default</Button>
                <Button appearance="primary">Primary</Button>
                <Button appearance="link">Link</Button>
                <Button appearance="ghost">Ghost</Button>
              </ButtonToolbar>
              <hr />
              <CheckboxGroup name="check" defaultValue={['1', '2']} inline>
                <Checkbox value="1">Javascript</Checkbox>
                <Checkbox value="2">CSS</Checkbox>
                <Checkbox value="3">HTML</Checkbox>
              </CheckboxGroup>
              <hr />
              <RadioGroup name="radio" defaultValue="1" inline>
                <Radio value="1">Front End</Radio>
                <Radio value="2">Back End </Radio>
              </RadioGroup>
              <hr />
              <Input />
              <hr />
              <Toggle defaultChecked />
              <hr />
              <Slider progress defaultValue={50} />
            </Panel>
          </div>
        </div>

        <ImageToColors
          onColorChange={value => {
            this.handleChangeComplete({ hex: value['#'] });
          }}
        />
      </Content>
    );
  }
}

export default PalettePage;
