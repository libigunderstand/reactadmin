import React, { Component } from 'react';
import './error.scss'
import img404 from "../../assets/images/404.png"

class Error404 extends Component {
    state = {
        count: 5
    }
    componentDidMount() {
        setInterval(()=> {
            if(this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            }else {
                // this.props.history
                console.log(this.props.history);
            }
        },1000)
    }
    render() {
        return (
            <div className="container">
                <img className="bg" src={ img404 } alt="……"/>
                <div className="btn">
                    <a href="/" className="goindex">返回首页</a>
                    <a href="/" className="lx">暂定</a>
                    <div className="timeout"><span>{ this.state.count }</span>秒后送你回去</div>
                </div>
            </div>
        );
    }
}

export default Error404;