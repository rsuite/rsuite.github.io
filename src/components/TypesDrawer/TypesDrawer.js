import React from 'react';
import { Drawer } from 'rsuite';
import MarkdownView from '../MarkdownView';

class TypesDrawer extends React.Component {
  render() {
    const { show, onHide } = this.props;
    return (
      <Drawer placement="right" show={show} onHide={onHide}>
        <Drawer.Header>
          <Drawer.Title>Types</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <MarkdownView>{require('./Types.md')}</MarkdownView>
        </Drawer.Body>
      </Drawer>
    );
  }
}

export default TypesDrawer;
