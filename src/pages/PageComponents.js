
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from 'rsuite';

import { Markdown } from 'react-markdown-reader';
import DocHeader from '../fixtures/DocHeader';
import DocSidebar from '../fixtures/DocSidebar';

import menu from '../components/options';

class PageComponents extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div>

        <Row>
          <Col md={2} sm={12}>

            <DocSidebar menu={menu}>
              <Markdown>
                {require('./components.md')}
              </Markdown>
            </DocSidebar>
          </Col>
          <Col md={10} sm={12}>
            {this.props.children}
          </Col>

        </Row>

      </div>
    );
  }
}

export default PageComponents;
