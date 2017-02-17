import React from 'react';
import { Sidebar, Navbar, Nav } from 'rsuite';
import { Link } from 'react-router';

const DocFooter = React.createClass({
    render() {

        return (
           <div className="footer">
                <div className="container">


                    Powered by<a href="http://www.hypers.com" target="_blank">Hypers FE</a>

                    <a href="https://github.com/rsuite/rsuite" target="_blank"><i className="fa fa-github"></i></a>

                    <a href="https://gitter.im/rsuite/rsuite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
                        <img src="https://badges.gitter.im/rsuite/rsuite.svg" alt="Join the chat at https://gitter.im/rsuite/rsuite"  />
                    </a>
                </div>
           </div>
        );
    }
});
export default DocFooter;
