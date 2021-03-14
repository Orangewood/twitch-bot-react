import React, { useEffect } from "react";
import { Layout, Menu, Image, Typography, Space, Row, Col } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "../scss/Home.scss";
import Logo from "../images/Logo.png";

interface HomeProps {
  authenticatedSuccessfully: (success: boolean) => void;
  accessToken?: (token: string) => void;
}

export default function Home(props: HomeProps) {
  const { Header, Content, Footer, Sider } = Layout;
  const { Title, Paragraph, Text, Link } = Typography;
  const { accessToken, authenticatedSuccessfully } = props;
  const accessTokenString = window.location.hash.split("=")[1].split("&")[0];

  useEffect(() => {
    if (accessTokenString) authenticatedSuccessfully(true);
    if (accessToken) accessToken(accessTokenString);
  }, []);

  return (
    <Layout>
      <Sider className='home-slider'>
        <div className='logo' />
        <Menu theme='dark' mode='vertical-left' defaultSelectedKeys={["4"]}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Chat
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            Commercials
          </Menu.Item>
        </Menu>
      </Sider>
      <Row gutter={24}>
        <Col span={12}>
          {/* <Image
            src={Logo}
            preview={false}
            className='home-slider-image'
          ></Image> */}
          wat
        </Col>
        <Col span={12}>
          <Typography>
            <Title>Welcome</Title>
            <Paragraph>Testing </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Layout>
  );
}
