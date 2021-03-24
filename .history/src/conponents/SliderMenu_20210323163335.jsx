import React, { Component } from 'react';

class SliderMenu extends Component {
    render() {
        return (
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
        );
    }
}

export default SliderMenu;