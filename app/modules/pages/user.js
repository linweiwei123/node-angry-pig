/**
 * Created by yitala on 2017/10/15.
 */
import React,{Component} from 'react';
import ajax from 'superagent';
import { IndexLink } from 'react-router';


class User extends Component{

    constructor(props){
        super(props);

        this.state = {
            events: []
        }

    }

    componentWillMount(){
        ajax.get(`https://api.github.com/users/${this.props.params.name}/events`)
            .end((error,response)=>{
                if(!error && response.body){
                    console.log(response.body);
                    this.setState({events:response.body})
                }
                else{
                    console.log(`请求${this.props.params.name}数据出错`);
                }
            })
    }

    render(){
        return (
            <div>
                <p className="text-center">你的位置：<IndexLink to="/" activeClassName="active">Home</IndexLink> > {this.props.params.name} </p>
                <p>{this.props.params.name}</p>
                <div>{this.state.events.map((event,index)=>(
                    <div key={index}>
                        {event.type} {event.created_at}
                    </div>
                ))}</div>
            </div>
        )
    }

}

export default User;