import React from 'react';
import _ from 'lodash';
import { Col, Nav, Navbar, Divider, Icon, ButtonGroup, Button } from '../rsuiteSource';

import * as rsuite from '../rsuiteSource';
import PageContainer from '../fixtures/PageContainer';
import Paragraph from '../fixtures/Paragraph';
import MarkdownView from '../fixtures/MarkdownView';
import CodeView from '../fixtures/CodeView';
import components from '../fixtures/components';
import { getDict } from '../locales';

const babelOptions = {
  presets: ['env', 'stage-0', 'react'],
  plugins: ['transform-class-properties']
};

const dist = getDict();

const CustomCodeView = ({ dependencies, ...rest }) => (
  <CodeView
    {...rest}
    babelOptions={babelOptions}
    buttonClassName="rs-btn-subtle rs-btn-icon-circle"
    dependencies={{ ...dependencies, Paragraph, Divider, rsuite }}
  />
);

const createComponentExample = ({ id, examples = [], dependencies }) => {
  return locale => {
    const name = _.kebabCase(id);
    const componentPath = locale === 'en' ? `${name}/en/` : `${name}/`;
    const context = require(`./${componentPath}index.md`);
    const componentExamples = examples.map(item => require(`./${componentPath}${item}.md`));

    class ComponentExample extends React.Component {
      static defaultProps = {
        tabExamples: []
      };

      constructor(props) {
        super(props);
        const component = components.find(item => item.id === id || item.name === id);
        this.state = {
          tabIndex: 0,
          designHash: _.get(component, 'designHash'),
          routerId: _.get(component, 'id')
        };
      }

      renderExampleByTabIndex() {
        const { tabExamples } = this.props;
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
            <h3>{dist.common.advanced} </h3>

            <ButtonGroup size="sm">
              {tabExamples.map((item, index) => (
                <Button
                  key={index}
                  appearance={index === tabIndex ? 'primary' : 'default'}
                  onClick={() => {
                    this.setState({ tabIndex: index });
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        );
      }
      render() {
        const { tabExamples = [], children } = this.props;

        const { designHash, routerId } = this.state;
        const docs = context.split('<!--{demo}-->');
        const header = docs[0];
        const footer = docs[1];

        return (
          <PageContainer
            designHash={designHash}
            routerId={routerId ? `components/${routerId}` : null}
          >
            <MarkdownView>{header}</MarkdownView>
            {componentExamples.map((item, index) => (
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

    return ComponentExample;
  };
};

export default createComponentExample;
