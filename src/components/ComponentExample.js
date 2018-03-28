import React from 'react';
import _ from 'lodash';
import { Col, Nav, Navbar, Divider, Icon } from '../rsuiteSource';

import * as rsuite from '../rsuiteSource';
import PageContainer from '../fixtures/PageContainer';
import Paragraph from '../fixtures/Paragraph';
import MarkdownView from '../fixtures/MarkdownView';
import CodeView from '../fixtures/CodeView';
import components from '../fixtures/components';

const babelOptions = {
  presets: ['env', 'stage-0', 'react'],
  plugins: ['transform-class-properties']
};

const CustomCodeView = ({ dependencies, ...rest }) => (
  <CodeView
    {...rest}
    babelOptions={babelOptions}
    buttonClassName="rs-btn-subtle rs-btn-icon-circle"
    dependencies={{ ...dependencies, Paragraph, Divider, rsuite }}
  />
);

class ComponentExample extends React.Component {
  static defaultProps = {
    tabExamples: []
  };

  constructor(props) {
    super(props);
    const designHash = _.get(
      components.find(item => item.id === props.id || item.name === props.id),
      'designHash'
    );

    this.state = {
      tabIndex: 0,
      designHash
    };
  }

  renderExampleByTabIndex() {
    const { tabExamples, dependencies } = this.props;
    const { tabIndex } = this.state;

    if (!tabExamples.length) {
      return null;
    }

    const { sorce } = tabExamples[tabIndex];

    return <CustomCodeView key={tabIndex} source={sorce} dependencies={dependencies} />;
  }

  renderTabs() {
    const { tabExamples } = this.props;
    const { tabIndex } = this.state;

    if (!tabExamples.length) {
      return null;
    }
    return (
      <div>
        <h3>高级功能</h3>
        <Navbar>
          <Nav
            activeKey={tabIndex}
            onSelect={tabIndex => {
              this.setState({ tabIndex });
            }}
          >
            {tabExamples.map((item, index) => (
              <Nav.Item key={index} eventKey={index}>
                {item.title}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar>
      </div>
    );
  }
  render() {
    const {
      context,
      examples = [],
      tabExamples = [],
      children,
      dependencies,
      id,
      ...rest
    } = this.props;

    const { designHash } = this.state;
    const docs = context.split('<!--{demo}-->');
    let header = docs[0];
    const footer = docs[1];

    if (designHash) {
      header = header.replace(
        '</h1>',
        `</h1><a class="link-view-design" href='/design/index.html#${designHash}' target="_blank">原型设计</a>`
      );
    }

    return (
      <PageContainer {...rest}>
        <MarkdownView>{header}</MarkdownView>
        {examples.map((item, index) => (
          <CustomCodeView key={index} source={item} dependencies={dependencies} />
        ))}
        {this.renderTabs()}
        {this.renderExampleByTabIndex()}
        <MarkdownView>{footer}</MarkdownView>
        {children}
      </PageContainer>
    );
  }
}

export default ComponentExample;
