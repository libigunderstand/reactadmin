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

class PopverContent extends React.Component {
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
                    <Button type="primary">Primary Button</Button>
                </div>
            </div>
        )
    }
}

class Home extends React.Component {
    state = {
        progress: 0,
        userinfo: {
            username: 'admin'
        }
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
                        <Popover className="popver" placement="bottomLeft" title="" content={ <PopverContent></PopverContent> } trigger="click">
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
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home
