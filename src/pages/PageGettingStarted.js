
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from 'rsuite';
import { Markdown } from '../fixtures/Markdown';

const PageGettingStarted = React.createClass({

  componentWillMount() {
    setTimeout(() => {
      console.log('dddd');
      this.setState({
        a: 12
      });
    }, 5000);
  },

  render: function () {
    return (
      <Content>
        <Row>
          <Col md={12}>
            <Markdown>
              {require('./getting-started.md')}
            </Markdown>
          </Col>
        </Row>
      </Content>
    );
  }
});

export default PageGettingStarted;
