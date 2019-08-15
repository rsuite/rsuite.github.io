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
  Loader,
  FlexboxGrid
} from 'rsuite';
import Loadable from 'react-loadable';
import getPalette from './getPalette';
import ColorPanel from './ColorPanel';
import ImageToColors from './ImageToColors';
import MarkdownView from '@/components/MarkdownView';
import PageContainer from '@/components/PageContainer';
import loadJsFile from '@/utils/loadJsFile';
import getLocalePath from '@/utils/getLocalePath';
import SketchPicker from './SketchPicker';

const colors = [
  '#34C3FF',
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
  '#607d8b'
];

const CirclePicker = Loadable({
  loader: () => import('react-color/lib/components/circle/Circle'),
  loading: () => <div>loading...</div>
});

const lessUrl = 'https://cdn.bootcss.com/less.js/3.9.0/less.min.js';

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
      const globalVars = {
        '@palette-color': color,
        '@theme-is-default': this.getThemeIsDefault()
      };
      window.less.globalVars = globalVars;
      window.less.modifyVars(globalVars);
    };

    getThemeIsDefault = () =>
      ['default', null].includes(localStorage.getItem('theme'));

    handleChangeComplete = ({ hex: color }) => {
      this.setState({ color });
      if (this.lessLoaded) {
        this.changeLessColor(color);
      } else {
        // Less global config.
        window.less = {
          async: true,
          logLevel: 0,
          javascriptEnabled: true,
          globalVars: {
            '@palette-color': this.state.color,
            '@theme-is-default': this.getThemeIsDefault()
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

          <div className="row-split">
            <div className="col-side">
              <div className="circle-picker-wrapper">
                <CirclePicker
                  color={color}
                  colors={colors}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
              <SketchPicker
                color={color}
                onChangeComplete={this.handleChangeComplete}
              />
              <div className="panel-color-wrap">
                <ColorPanel colors={getPalette(color)} />
              </div>
            </div>
            <div className="col-content">
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
                    <Radio value="1">Front end</Radio>
                    <Radio value="2">Back end </Radio>
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
