/**
 * Created by yitala on 2017/10/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import routes from './routes/config';
import './assets/index.css';

ReactDOM.render(
    <Router history={createHistory()} >
        {routes}
    </Router>,
    document.getElementById('app')
);
