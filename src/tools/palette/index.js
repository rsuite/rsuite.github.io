import React from 'react';
import {
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
  Input,
  Panel,
  Loader
} from 'rsuite';
import Loadable from 'react-loadable';
import getPalette from './getPalette';
import ColorPanel from './ColorPanel';
import ImageToColors from './ImageToColors';
import MarkdownView from '../../fixtures/MarkdownView';
import loadJsFile from '../../fixtures/loadJsFile';
import getLocalePath from '../../fixtures/getLocalePath';
import PageContainer from '../../fixtures/PageContainer';

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#34c3ff',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b'
];

const SketchPicker = Loadable({
  loader: () => import('react-color/lib/components/sketch/Sketch'),
  loading: () => <div>loading...</div>
});

const CirclePicker = Loadable({
  loader: () => import('react-color/lib/components/circle/Circle'),
  loading: () => <div>loading...</div>
});

const lessUrl = 'https://cdn.bootcss.com/less.js/2.7.2/less.min.js';

export default getLocalePath(localePath => {
  class PalettePage extends React.Component {
    constructor() {
      super();
      this.lessLoaded = false;
      this.state = {
        showLoading: false,
        color: '#34c3ff'
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
        this.setState({
          showLoading: true
        });
        loadJsFile(lessUrl, () => {
          this.lessLoaded = true;
          this.changeLessColor(color);
          this.setState({
            showLoading: false
          });
        });
      }
    };

    render() {
      const { color, showLoading } = this.state;
      return (
        <PageContainer hidePageNav>
          <Row>
            <Col md={24}>
              <MarkdownView>{require(`.${localePath}index.md`)}</MarkdownView>
            </Col>
          </Row>

          <div className="palette-wrapper">
            <div className="palette-panel">
              <CirclePicker
                color={color}
                colors={colors}
                onChangeComplete={this.handleChangeComplete}
              />
              <br />
              <SketchPicker
                style={{ marginTop: 6 }}
                color={color}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>

            <div className="panel-color-wrap">
              <ColorPanel colors={getPalette(color)} />
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
                {showLoading ? (
                  <Loader backdrop content="loading..." vertical />
                ) : null}
              </Panel>
            </div>
          </div>

          <ImageToColors
            onColorChange={value => {
              this.handleChangeComplete({ hex: value['#'] });
            }}
          />
        </PageContainer>
      );
    }
  }

  return PalettePage;
});
