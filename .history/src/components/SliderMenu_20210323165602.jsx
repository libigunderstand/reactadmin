import React from 'react';
import { Layout, Menu } from "antd";
import logo from '_assets/images/logo.jpg'
const { Sider } = Layout;

class SliderMenu extends React.Component {
    state = {
        collapsed: false,
        menuList: [
            {
                label: '11111',
                id: 1
            },
            {
                label: '22222',
                id: 2
            },
            {
                label: '33333',
                id: 3
            },
            {
                label: '44444',
                id: 4
            }
        ]
    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={ collapsed } onCollapse={this.onCollapse}>
                <div className="title">
                    <img src={ logo } alt=""/>
                    { !collapsed ? '管理平台' : null }
                </div>

                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    {
                        this.state.menuList.map(item=> {
                            return (
                                <Menu.Item key={item.id}>{item.label}</Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
        );
    }
}

export default SliderMenu