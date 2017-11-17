/**
 * Created by yitala on 2017/10/15.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';

class App extends Component{

    render(){
        return(
            <div>
                <h1 className="text-center">React learn App</h1>
                {this.props.children}
                <div className="footer">
                    <ul>
                        <li>
                            <Link to="/">list</Link>
                        </li>
                        <li>
                            <Link to="/detail/react">React</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;