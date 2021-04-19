import React from "react"
import { 
    Layout, 
    Breadcrumb, 
    Tag, 
    Avatar, 
    Badge,
    Popover,
    Button 
} from "antd";
import './home.scss'
import SliderMenu from "_g/SliderMenu"
import LoadingBar from 'react-top-loading-bar'
import { UserOutlined } from '@ant-design/icons'

const { Header, Content } = Layout;
const { CheckableTag } = Tag;

class Home extends React.Component {
    state = {
        progress: 0,
        curdate: '',
        userinfo: {
            username: 'admin'
        },
        timer: null
    }
    setProgress = ()=> {
        setInterval(()=> {
            if(this.state.progress <= 100) {
                this.setState({
                    progress: this.state.progress + 5
                })
            }
        },600)
    }
    createTime() {
        let date = new Date()
        let year, month, day, hour, min, sec, week = ''
        year = date.getFullYear()
        month = date.getMonth() + 1
        hour = date.getHours()
        min = date.getMinutes()
        sec = date.getSeconds()
        week = date.getDay()
        day = date.getDate()
        this.setState({
            curdate: year + '-' + 
            (month < 10 ? ('0' + month) : month) + 
            '-' + (day < 10 ? ('0' + day) : day) + ' ' + 
            (hour < 10 ? ('0' + hour) : hour) + ':' + 
            (min < 10 ? ('0' + min) : min) + ':' + 
            (sec < 10 ? ('0' + sec) : sec)
        })
    }
    componentDidMount() {
        this.state.timer = setInterval(()=> {
            this.createTime()
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
    logout= ()=> {
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    render() {
        let state = this.state
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <SliderMenu></SliderMenu>
                <Layout className="site-layout">
                    <LoadingBar
                        color='#000'
                        height= "4px"
                        progress={ state.progress }
                        onLoaderFinished={ this.setProgress.bind(this)() }
                    />
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div className="sys_time">
                            <span className="curdate">{ state.curdate }</span>
                        </div>
                        <Popover className="popver" placement="bottomLeft" title="" content={ <PopverContent reacveLogout={ this.logout }></PopverContent> } trigger="click">
                            <Badge count={ 999 } overflowCount={ 99 }>
                                <Avatar
                                    size={ 40 }
                                    icon={<UserOutlined />}
                                    className="avatar"
                                />
                            </Badge>
                        </Popover>
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                        <CheckableTag key="1">首页</CheckableTag>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                        <input type="file" accept="audio/*;capture=microphone" />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

class PopverContent extends Home {
    logout = ()=> {
        this.props.reacveLogout()
    }
    render() {
        return (
            <div className="content_wrapper">
                <div className="c_item">
                    <span className="i_title">用户：</span>
                    <span className="i_value">admin</span>
                </div>
                <div className="c_item">
                    <span className="i_title">角色：</span>
                    <span className="i_value">普通用户</span>
                </div>
                <div className="bottom_btn">
                    <Button type="primary" onClick={ this.logout }>退出登录</Button>
                </div>
            </div>
        )
    }
}

export default Home
