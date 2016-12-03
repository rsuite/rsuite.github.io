import React from 'react';
import { Sidebar, Navbar, Nav } from 'rsuite';
import { Link } from 'react-router';

const DocFooter = React.createClass({
    render() {

        return (
           <div className="footer">
                <div className="container">


                    Powered by<a href="https://www.hypers.com" target="_blank">Hypers FE</a>
                    <a href="https://gitter.im/rsuite/rsuite?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge">
                    <img src="https://camo.githubusercontent.com/9e6bb52fcbafda44267c988c33a205c7938d8601/68747470733a2f2f6261646765732e6769747465722e696d2f7273756974652f7273756974652e737667" alt="Join the chat at https://gitter.im/rsuite/rsuite" data-canonical-src="https://badges.gitter.im/rsuite/rsuite.svg" />
                    </a>
                    |

                    <a href="https://github.com/rsuite/rsuite" target="_blank"><i className="fa fa-github"></i></a>


                </div>
           </div>
        );
    }
});
export default DocFooter;
