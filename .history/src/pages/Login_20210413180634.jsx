import React, { Component } from "react";
import "./login.scss";
import Particles from "react-particles-js";
import { Form, Input, Button, Checkbox, notification, Carousel } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import store from "@/store/store.js"
import Action from '@/store/action.js';
import CryptoJS from "crypto-js"

//crypto-js做密码加密
//首先声明两个变量，加密的时候要用到，要和后台沟通，保持一致
const AES_KEY = (new Date()).getTime()
const IV = 'TRYTOCN394402133';

function doencrypt(psw) {
    const iv = CryptoJS.enc.Utf8.parse(IV);
    let srcs = CryptoJS.enc.Utf8.parse(psw);
    let encrypted = CryptoJS.AES.encrypt(srcs, AES_KEY, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}

class Login extends Component {
    state = {
        carRef: null
    }
    setCarouselRef = (el)=> {
        this.setState({
            carRef: el
        })
    }
    onFinish = async ({ username, password })=> {
        let createpsw = doencrypt(password)
        let param = {
            username: username,
            password: createpsw,
            timestamp: AES_KEY
        }
        await store.dispatch(Action.userLogin(param))
        let resdata = store.getState().User
        if(resdata.result) {
            if(resdata.result.flag === 1) {
                this.openNotificationWithIcon('success','登录成功！','用户登录成功！')
                localStorage.setItem("token", resdata.result.userinfo.token)
                this.props.history.push('/home')
            }else {
                this.openNotificationWithIcon('error','登录失败！','用户名密码错误！')
            }
        }
    }
    signup = async ()=> {
        let param = {
            username: 'admin111',
            password: '123'
        }
        await store.dispatch(Action.userSignup(param))
        let resdata = store.getState().User
    }
    openNotificationWithIcon = (type,t,c) => {
        notification[type]({
            message: t ? t : '提示',
            duration: 1,
            description: c ? c : '未知信息！',
        })
    }
    gosignup = ()=> {
        this.state.carRef.next()
    }
    gosignin = ()=> {
        this.state.carRef.prev()
    }
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
                        <Carousel dots={ false } ref={ this.setCarouselRef }>
                            <div className="login_in">
                                <h1>用户登录</h1>
                                <div className="form">
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={ this.onFinish }
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入用户名!',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入密码!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="密码"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>记住密码</Checkbox>
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                登 录
                                            </Button>
                                        </Form.Item>
                                        <p className="gosignup"><span onClick={ this.gosignup }>还没账号？点我去注册……</span></p>
                                    </Form>
                                </div>
                            </div>
                            <div className="login_in">
                                <h1>用户注册</h1>
                                <div className="form">
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={ this.signup }
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入用户名!',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入密码!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="密码"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                注 册
                                            </Button>
                                        </Form.Item>
                                        <p className="gosignup"><span onClick={ this.gosignin }>已有账号？点我去登录……</span></p>
                                    </Form>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
