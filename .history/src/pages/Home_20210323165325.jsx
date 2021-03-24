import React from "react"
import { Layout, Breadcrumb } from "antd";
import './home.scss'

const { Header, Content } = Layout;

// import SliderMenu from "_g/SliderMenu"

class Home extends React.Component {

    render() {
        const { collapsed } = this.state;
        return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* <SliderMenu></SliderMenu> */}
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
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
