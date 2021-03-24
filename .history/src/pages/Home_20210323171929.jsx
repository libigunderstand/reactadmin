import React from "react"
import { Layout, Breadcrumb, Tag } from "antd";
import './home.scss'
import SliderMenu from "_g/SliderMenu"
import LoadingBar from 'react-top-loading-bar'

const { Header, Content } = Layout;


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
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Tag>Tag 1</Tag>
                    <Tag>
                        Tag 1
                    </Tag>
                    <Tag closable>
                        Tag 2
                    </Tag>
                    <Tag closable>
                        Tag 3
                    </Tag>
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
