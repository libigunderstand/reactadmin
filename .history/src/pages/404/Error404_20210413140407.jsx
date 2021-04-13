import React, { Component } from 'react';
import './error.scss'

class Error404 extends Component {
    render() {
        return (
            <div className="container">
                <img className="bg" src="404.png" alt="……"/>
                <div className="btn">
                    <a href="/" class="goindex">返回首页</a>
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=1013674450&site=qq&menu=yes" class="lx">咨询站长</a>
                    <div style="{clear: both;}"></div>
                </div>
            </div>
        );
    }
}

export default Error404;