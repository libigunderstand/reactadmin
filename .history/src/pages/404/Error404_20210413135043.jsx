import React, { Component } from 'react';
import './error.scss'

class Error404 extends Component {
    render() {
        return (
            <div id="da-wrapper" className="fluid">
            
                <div id="da-content">

                    <div className="da-container clearfix">
                    
                        <div id="da-error-wrapper">
                            
                            <div id="da-error-pin"></div>
                            <div id="da-error-code">
                                error <span>404</span>                    
                            </div>
                        
                            <h1 className="da-error-heading">哎哟喂！页面让狗狗叼走了！</h1>
                            <p>大家可以到狗狗没有叼过的地方看看！ <a href="#">点击进入首页</a></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Error404;