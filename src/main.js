//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './components/App/App.js';

//ReactDOM.render(<App />, document.getElementById('root'));

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
)
