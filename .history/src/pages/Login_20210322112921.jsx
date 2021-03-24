import React, { Component } from "react";
import "./login.scss";
import Particles from "react-particles-js";

class Login extends Component {
    render() {
        return (
        <div className="loginwrap">
            <Particles
                params={
                    {
                        particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#fff",
                                blur: 15,
                                opacity: 0.5,
                            },
                        },
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        color: {
                            value: "#ccc",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 20,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            grab: {
                                distance: 50,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 100,
                                size: 80,
                                duration: 2,
                                opacity: 0.8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
            <div className="loginform">
                <div className="login_left">管理系统</div>
                <div className="login_right">
                    <h1 className="title">用户登录</h1>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;
