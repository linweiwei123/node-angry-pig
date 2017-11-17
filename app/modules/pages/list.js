/**
 * Created by yitala on 2017/10/15.
 */
import React,{ Component } from 'react';
import {IndexLink, Link } from 'react-router';

class List extends Component{

    render(){
        return (
            <div>
                <p>this is the list page</p>
                <p className="text-center">你的位置：<IndexLink to="/" activeClassName="active">Home</IndexLink></p>
                <ul>
                    <li>
                        <Link to="/detail/react">React</Link>
                    </li>
                    <li>
                        <Link to="/detail/react-native">React native</Link>
                    </li>
                    <li>
                        <Link to="/detail/jest">Jest</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default List;