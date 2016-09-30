import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, IndexRedirect, hashHistory, browserHistory } from 'react-router';

// style
import './docs.less';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/base16-dark.css';

//import routes from './routes';

require('./hypers-hire');

import App from  './components/App';

// Pages
import PageIndex from  './pages/PageIndex';
import PageGettingStarted from  './pages/PageGettingStarted';
import PageComponents from './pages/PageComponents';
import PageComponentsDoc from './pages/PageComponentsDoc';
import PageExamples from './pages/PageExamples';


render((
    <Router history={hashHistory} >

        <Route path="/" component={App}>
            <IndexRoute component={PageIndex}/>
            <Route path="getting-started" component={PageGettingStarted} />
            <Route path="examples" component={PageExamples} />

            <Route path="components" component={PageComponents}>
                <Route path=":name"  component={PageComponentsDoc} />
                <IndexRedirect to="buttons" />
            </Route>
        </Route>

    </Router>
), document.getElementById('root'));

