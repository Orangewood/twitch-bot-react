import React, { useEffect, useState } from "react";
import "../scss/Home.scss";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface HomeProps {
  authenticatedSuccessfully: (success: boolean) => void;
  accessToken?: (token: string) => void;
}

export default function Home(props: HomeProps) {
  const { accessToken, authenticatedSuccessfully } = props;
  const accessTokenString = window.location.hash.split("=")[1].split("&")[0];
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const [collapsed, setCollapse] = useState<boolean>(false);

  useEffect(() => {
    if (accessTokenString) authenticatedSuccessfully(true);
    if (accessToken) accessToken(accessTokenString);
  }, []);

  const style = { background: "#0092ff", padding: "8px 0" };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapse(!collapsed)}
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
          <Menu.Item key='1' icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9' icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Created by Orangewood ©2021
        </Footer>
      </Layout>
    </Layout>
  );
}
