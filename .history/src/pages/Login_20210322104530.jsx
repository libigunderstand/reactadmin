import React, { Component } from 'react';
import './login.scss'
import Particles from 'react-particles-js';

class Login extends Component {
    render() {
        return (
            <div className="loginwrap">
                <Particles
                    params={{
                        polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                            url: 'path/to/svg.svg'
                        }
                }}>
                </Particles>
            </div>
        );
    }
}

export default Login;