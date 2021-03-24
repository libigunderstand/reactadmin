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

            <SliderMenu collapsed={collapsed} onCollapse={this.onCollapse}></SliderMenu>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="title">
                    <img src={ logo } alt=""/>
                    { !collapsed ? '管理平台' : null }
                </div>

                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        选项1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        选项2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="选项3">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="选项4">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        选项5
                    </Menu.Item>
                </Menu>
            </Sider>
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
