/**
 * Created by yitala on 2017/10/14.
 */
import React ,{ Component } from 'react';
import ajax from 'superagent';
import { IndexLink, Link } from 'react-router';

class Detail extends Component{

    constructor(props){
        super(props);
        this.state = {
            mode:'commits',
            commits:[],
            forks:[],
            pulls:[]
        };
    }

    selectMode(mode){
        this.setState({mode})
    }

    componentWillMount(){
        this.fetchFeed('commits');
        this.fetchFeed('forks');
        this.fetchFeed('pulls');
    }

    fetchFeed(type){
        if(this.props.params.repo === ''){
            return;
        }
        const baseUrl = 'https://api.github.com/repos/facebook';

        ajax.get(`${baseUrl}/${this.props.params.repo}/${type}`)
            .end((error,response)=>{
                if(!error && response){
                    console.log(response.body);
                    this.setState({ [type]:response.body})
                }
                else{
                    console.log(`从git请求${type}数据错误`,error);
                }
        })
    }

    renderCommits(){
        return (
                <div>
                    {this.state.commits.map((commit,index)=>{
                        const login = commit.author?commit.author.login:'Anonymous';
                        return (
                            <div className="commitBox" key={index}>
                                <img className="avatar" src={commit.author?commit.author.avatar_url:''} alt=""/>
                                <div className="rightBox">
                                    <div>
                                        <Link to={`user/${login}`}>{commit.author?commit.author.login:'Anonymous'}</Link>
                                    </div>
                                    <a href={commit.html_url}>
                                        <div className="commitText">{commit.commit.message}</div>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
        )
    }

    renderForks(){
        return (
                <div >
                    {this.state.forks.map((commit,index)=>(
                        <div className="commitBox" key={index}>
                            <img className="avatar" src={commit.owner.avatar_url} alt=""/>
                            <div className="rightBox">
                                <div>{commit.owner?commit.owner.login:'Anonymous'}</div>
                                <a href={commit.html_url}>
                                    <div className="commitText">{commit.html_url}</div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
        )
    }

    renderPulls(){
        return (
                <div>
                    {this.state.pulls.map((commit,index)=>(
                        <div className="commitBox" key={index}>
                            <img className="avatar" src={commit.user.avatar_url} alt=""/>
                            <div className="rightBox">
                                <div>{commit.user?commit.user.login:'Anonymous'}</div>
                                <a href={commit.html_url}>
                                    <div className="commitText">{commit.html_url}</div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
        )
    }

    render(){
        let content;
        if(this.state.mode === 'commits'){
            content = this.renderCommits();
        }
        else if(this.state.mode === 'forks'){
            content = this.renderForks();
        }
        else{
            content = this.renderPulls();
        }
        return (
            <div className="detail-component-wrapper">
                <p className="text-center">你的位置：<IndexLink to="/" activeClassName="active">Home</IndexLink> > {this.props.params.repo} </p>
                <div>
                    <ul className="tab-bar">
                        <li className={this.state.mode === 'commits'?'active':''} onClick={this.selectMode.bind(this,'commits')} ref="commits">
                            commits
                        </li>
                        <li className={this.state.mode === 'forks'?'active':''} onClick={this.selectMode.bind(this,'forks')} ref="forks" >
                            forks
                        </li>
                        <li className={this.state.mode === 'pulls'?'active':''} onClick={this.selectMode.bind(this,'pulls')} ref="pulls">
                            pulls
                        </li>
                    </ul>
                </div>
                {content}
            </div>
        )
    }

}

export default Detail;