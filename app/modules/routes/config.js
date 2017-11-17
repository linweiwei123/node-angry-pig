/**
 * Created by yitala on 2017/10/15.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../pages/app';
import List from '../pages/list';
import Detail from '../pages/detail';
import User from '../pages/user';


const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={List} />
        <Route path="detail/:repo" component={Detail} />
        <Route path="user/:name" component={User} />
    </Route>
);

export default routes