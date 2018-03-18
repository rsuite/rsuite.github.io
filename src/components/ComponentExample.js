import React from 'react';
import { Col, Nav, Navbar, Divider } from '../rsuiteSource';
import PageContainer from './PageContainer';
import * as rsuite from '../rsuiteSource';
import Paragraph from '../fixtures/Paragraph';
import MarkdownView from '../fixtures/MarkdownView';
import CodeView from '../fixtures/CodeView';

const babelOptions = {
  presets: ['stage-0', 'react', 'es2015'],
  plugins: ['transform-class-properties']
};

class ComponentExample extends React.Component {
  static defaultProps = {
    tabExamples: []
  };

  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }
  renderExampleByTabIndex() {
    const { tabExamples, dependencies } = this.props;
    const { tabIndex } = this.state;

    if (!tabExamples.length) {
      return null;
    }

    const { sorce } = tabExamples[tabIndex];
    return (
      <CodeView
        key={tabIndex}
        babelOptions={babelOptions}
        buttonClassName="btn-subtle btn-icon-circle"
        source={sorce}
        dependencies={{ ...dependencies, Paragraph, Divider, rsuite }}
      />
    );
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
      ...rest
    } = this.props;

    const docs = context.split('<!--{demo}-->');
    return (
      <PageContainer {...rest}>
        <MarkdownView>{docs[0]}</MarkdownView>
        {examples.map((item, index) => (
          <CodeView
            babelOptions={babelOptions}
            buttonClassName="btn-subtle btn-icon-circle"
            key={index}
            source={item}
            dependencies={{ ...dependencies, Paragraph, rsuite }}
          />
        ))}
        {this.renderTabs()}
        {this.renderExampleByTabIndex()}
        <MarkdownView>{docs[1]}</MarkdownView>
        {children}
      </PageContainer>
    );
  }
}

export default ComponentExample;
