import React from "react"
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import './home.scss'
import logo from '_assets/images/logo.jpg'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import SliderMenu from "_g/SliderMenu"

class Home extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
        <Layout style={{ minHeight: "100vh" }}>

            <SliderMenu></SliderMenu>
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
