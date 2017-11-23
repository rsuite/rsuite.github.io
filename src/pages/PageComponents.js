
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from 'rsuite';

import Markdown from '../fixtures/Markdown';
import DocHeader from '../fixtures/DocHeader';
import DocSidebar from '../fixtures/DocSidebar';

import * as menu from '../components/menu';

class PageComponents extends React.Component {
  render() {
    return (
      <div>

        <Row>
          <Col md={3} sm={12}>
            <DocSidebar menu={menu}>
              <Markdown>
                {require('./components.md')}
              </Markdown>
            </DocSidebar>
          </Col>
          {this.props.children}
        </Row>

      </div>
    );
  }
}

export default PageComponents;
