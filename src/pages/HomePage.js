import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, Card, Col, Row, Space, Button } from 'antd';
import { LeftOutlined, RightOutlined, MailOutlined, FacebookOutlined, LinkedinOutlined, WhatsAppOutlined, SlackOutlined } from '@ant-design/icons';

import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import bg from '../assets/bg.jpg';

const { Content } = Layout;

// Mapping of platform names to their respective icons
const platformIcons = {
    Mail: <MailOutlined style={{ color: '#FD1D1D', fontSize: '1.5rem' }} />,
    Facebook: <FacebookOutlined style={{ color: '#1877F2', fontSize: '1.5rem' }} />,
    LinkedIn: <LinkedinOutlined style={{ color: '#0077B5', fontSize: '1.5rem' }} />,
    Whatsapp: <WhatsAppOutlined style={{ color: '#075E54', fontSize: '1.5rem' }} />,
    Slack: <SlackOutlined style={{ color: '#E01E5A', fontSize: '1.5rem' }} />,
};



const HomePage = ({ myname, skills }) => {
  const bimg = bg;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateLeft = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
  };

  const navigateRight = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
        navigateRight();
    }, 4900); // Change color every 4.9 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <Layout style={{ backgroundImage: `url(${bimg})`, backgroundSize: 'cover' }}>
      <HeaderComponent myname={myname} />
      <Content style={{ padding: '0 24px', minHeight: 'calc(89vh - 64px)' }}>
        <Breadcrumb style={{ margin: '16px 0' }} />

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={16} lg={18} xl={16}>
            <Card
              hoverable
              style={{ width: '100%' }}
              bordered={false}
            >
              <h1 style={{ fontWeight: 'bold', fontSize: '2.2rem' }}>{myname}</h1>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                "I am a software engineer with a passion for building beautiful, functional, and scalable applications. A web Developer, Python Developer, React Lover, C Programmer. Object-Oriented Languages. A music enthusiast"
              </p>
              <Space>
                {Object.entries(platformIcons).map(([platform, icon]) => (
                  <span key={platform}>{icon}</span>
                ))}
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={8} lg={6} xl={4}>
            <Card
              bordered={false}
              cover={<img alt={skills[currentImageIndex].title} src={skills[currentImageIndex].img} height={130}/>}
              style={{ position: 'relative', height: '200px', padding:20, marginLeft:16 }}
            >
              <Space style={{ position: 'absolute', top: '50%', transform: 'translateY(-90%)', left: -30 }}>
                <Button onClick={navigateLeft}><LeftOutlined /></Button>
              </Space>
              <Space style={{ position: 'absolute', top: '50%', transform: 'translateY(-90%)', right: -30 }}>
                <Button onClick={navigateRight}><RightOutlined /></Button>
              </Space>
              <Card.Meta
                title={skills[currentImageIndex].title}
                style={{ textAlign: 'center', fontWeight: '100', top: '90%', transform: 'translateY(-50%)' }}
              />
            </Card>
          </Col>
        </Row>

      </Content>
      <FooterComponent myname={myname} />
    </Layout>
  );
};

export default HomePage;
