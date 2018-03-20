import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from '../../rsuiteSource';
import MarkdownView from '../../fixtures/MarkdownView';
import IconList from './IconList';

class IconPage extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#2196f3'
    };
  }
  handleChangeComplete = color => {
    this.setState({ color: color.hex });
  };

  render() {
    const { color } = this.state;
    return (
      <Content>
        <Row>
          <Col md={24}>
            <MarkdownView>{require('./index.md')}</MarkdownView>
          </Col>
        </Row>

        <IconList />
      </Content>
    );
  }
}

export default IconPage;
