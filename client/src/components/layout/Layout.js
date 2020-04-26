import React from "react";
import { Layout, Menu } from 'antd';

import './Layout.css'


const { Header, Content, Footer } = Layout;

const AppLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', backgroundColor: "#f1f1f1" }}>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2020 Created by Delano Junior</Footer>
        </Layout >
    )
}

export default AppLayout;