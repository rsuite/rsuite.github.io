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
import MarkdownView from '@/components/MarkdownView';
import PageContainer from '@/components/PageContainer';
import loadJsFile from '@/utils/loadJsFile';
import getLocalePath from '@/utils/getLocalePath';

const colors = [
  '#3498FF',
  '#2575FC',
  '#0052CC',
  '#1361AA',
  '#3F51B5',
  '#2487C2',

  '#FFEB3B',
  '#F5A623',
  '#F44336',
  '#e54304',
  '#e91e63',
  '#9c27b0',

  '#429321',
  '#4A148C',
  '#673AB7',
  '#880061',
  '#607d8b',
  '#795548'
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
        color: '#3498FF'
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
