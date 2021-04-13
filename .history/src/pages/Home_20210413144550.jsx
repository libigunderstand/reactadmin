import React from "react"
import { Layout, Breadcrumb, Tag, Avatar } from "antd";
import './home.scss'
import SliderMenu from "_g/SliderMenu"
import LoadingBar from 'react-top-loading-bar'
import { UserOutlined } from '@ant-design/icons'

const { Header, Content } = Layout;
const { CheckableTag } = Tag;

class Home extends React.Component {
    state = {
        progress: 0
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
        return (
        <Layout style={{ minHeight: "100vh" }}>
            <SliderMenu></SliderMenu>
            <Layout className="site-layout">
                <LoadingBar
                    color='#000'
                    height= "4px"
                    progress={ this.state.progress }
                    onLoaderFinished={ this.setProgress.bind(this)() }
                />
                <Header className="site-layout-background" style={{ padding: '10px 10px' }}>
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined />}
                />
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
