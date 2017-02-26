import React from 'react';
import { Sidebar, Navbar, Nav } from 'rsuite';
import { Link } from 'react-router';
import * as data from './data';


const DocSidebar = React.createClass({
    render() {
        const { children } = this.props;
        const menu = [];
        data.default.map((item,key) => {

            menu.push(
                <li  key={key} className="nav-header" >
                    {item.category}
                </li>
            );

            item.components.map((child, index) => {
                menu.push(
                    <Nav.Item key={index} activeClassName="active" componentClass={Link} to={`/components/${child.id}`} >

                        {child.name}
                        <span className="nav-chinese">{child.title}</span>
                    </Nav.Item>
                );
            });
        });

        return (
            <Sidebar >
                {children}
                <Nav className="nav-docs">
                    {menu}
                    <li  className="nav-header">Other</li>
                    <li><a target="_blank" href="http://rsuite.github.io/rsuite-table">RSuite Table</a></li>
                    <li><a target="_blank" href="http://rsuite.github.io/rsuite-echarts">RSuite ECharts</a></li>
                    <li><a target="_blank" href="https://rsuite.github.io/rsuite-datepicker/">RSuite Datepicker</a></li>
                    <li><a target="_blank" href="https://rsuite.github.io/rsuite-picker/">RSuite Picker</a></li>
                    <li><a target="_blank" href="https://rsuite.github.io/rsuite-uploader/">RSuite Uploader</a></li>
                    <li><a target="_blank" href="https://rsuite.github.io/rsuite-tree/">RSuite Tree</a></li>
                </Nav>
            </Sidebar>
        );
    }
});

export default DocSidebar;
