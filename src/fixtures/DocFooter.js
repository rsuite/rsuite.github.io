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

                    <a href="https://discord.gg/GmPXTH3">
                        <img src="https://camo.githubusercontent.com/10eef7528c50293db11a09f64f7c32d7b230ef8f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d4a6f696e253230636861742532302545322538362539322d3733386264372e737667" alt="Discord" data-canonical-src="https://img.shields.io/badge/Discord-Join%20chat%20%E2%86%92-738bd7.svg" />
                    </a>
                </div>
           </div>
        );
    }
});
export default DocFooter;
