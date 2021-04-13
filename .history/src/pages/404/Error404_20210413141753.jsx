import React, { Component } from 'react';
import './error.scss'
import img404 from "../../assets/images/404.png"

class Error404 extends Component {
    state = {
        count: 5
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <img className="bg" src={ img404 } alt="……"/>
                <div className="btn">
                    <a href="/" className="goindex">返回首页</a>
                    <a href="/" className="lx">暂定</a>
                    <div>{ this.count }后送你回去</div>
                </div>
            </div>
        );
    }
}

export default Error404;