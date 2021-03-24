import React, { Component } from 'react';
import { Header, Sider, Layout } from 'antd';

class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Sider>left sidebar</Sider>
                    <Content>main content</Content>
                    <Sider>right sidebar</Sider>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        );
    }
}

export default Home;