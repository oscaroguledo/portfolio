// src/pages/HomePage.js
import React from 'react';
import { Row, Col, Card as AntCard, Typography, Avatar, Divider, Button, Tabs } from 'antd'; // Import necessary components from antd

import useGitHubProfile from '../hooks/useGitHubProfile';
import TechStack from '../components/TechStack';
import GitHubData from './Github';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const HomePage = ({ ptoken, username }) => {

  const profile = useGitHubProfile(ptoken);

  const downloadCV = () => {
    // Replace with the URL or method to download your CV
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf'; // Add the correct path to your CV
    link.download = 'My_CV.pdf'; // Name of the downloaded file
    link.click();
  };
  // my complete tech stack tools
  const tools = [
    'Python', 'React', 'JavaScript', 'Node', 'Django', 'FastAPI',
    'Django REST Framework', 'Ninja', 'Pandas', 'NumPy',
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite3', 'Kivy',
    'HTML', 'CSS', 'jQuery', 'React Native', 'C',
    'Bash', 'Shell', 'Docker', 'Redis', 'Kafka', 'Django Channels',
    'AWS', 'Heroku', 'PythonAnywhere', 'Namecheap', 'Git', 'GitHub',
    'GitLab', 'Figma', 'Bootstrap', 'GraphQL',
    'RESTful APIs', 'Nginx', 'Celery', 'Flask', 'Scrapy', 'Beautiful Soup',
    'Jupyter Notebook', 'OpenCV', 'Keras', 'TensorFlow', 'Postman', 'Insomnia',
    'Pillow', 'SQLite', 'Redis',
    'JWT', 'OAuth', 'WebSocket', 
    'TypeScript', 'Redux', 'Microservices', 'Serverless', 'Socket.IO','DigitalOcean', 
    'CI/CD', 'GitHub Actions', 'Babel',
    'Apache Kafka', 'Scikit-Learn', 
    'Matplotlib', 'Seaborn', 'Data Visualization', 
    'QR Code Generation',
  ];


  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Section */}
      <Row gutter={16} style={{ marginBottom: '32px' }}>
        <Col span={6}>
          <Avatar size={100} src={profile?.avatar_url} alt="Profile Picture" />
        </Col>
        <Col span={18} style={{ textAlign: 'left' }}>
          <Title level={2}>{profile?.name || username}</Title>
          <Paragraph><strong>GitHub Username:</strong> {username}</Paragraph>
          <Paragraph><strong>GitLab Username:</strong> {profile?.gitlab_username || 'N/A'}</Paragraph>
          <Paragraph><strong>Email:</strong> <a href={`mailto:${profile?.email || 'oscarchiagoziem@gmail.com'}`}>{profile?.email || 'oscarchiagoziem@gmail.com'}</a></Paragraph>
          <Paragraph><strong>LinkedIn:</strong> <a href={profile?.linkedin || 'https://www.linkedin.com/in/oscar-oguledo-341bb2206'} target="_blank" rel="noopener noreferrer">{profile?.linkedin || 'https://www.linkedin.com/in/oscar-oguledo-341bb2206'}</a></Paragraph>
          <Paragraph><strong>Website:</strong> <a href={profile?.website || 'https://oscaroguledo.github.io/portfolio/'} target="_blank" rel="noopener noreferrer">{profile?.website || 'https://oscaroguledo.github.io/portfolio/'}</a></Paragraph>
          <Button type="primary" onClick={downloadCV} style={{ marginTop: '16px' }}>Download CV</Button>
        </Col>
      </Row>

      {/* Tabs for Projects */}
      <Tabs defaultActiveKey="1" style={{ marginBottom: '32px' }}>
        <TabPane tab="GitHub Projects" key="1">
          <GitHubData ptoken={ptoken} username={username} />
        </TabPane>
        <TabPane tab="GitLab Projects" key="2">
          <Row gutter={16}>
            {/* Assuming you have a function to fetch GitLab projects */}
            {/* Replace with actual GitLab projects logic */}
            <Col span={24}>
              <AntCard title="GitLab Project 1" style={{ marginBottom: '16px' }}>
                <Paragraph>This is a description of GitLab project 1.</Paragraph>
              </AntCard>
              <AntCard title="GitLab Project 2" style={{ marginBottom: '16px' }}>
                <Paragraph>This is a description of GitLab project 2.</Paragraph>
              </AntCard>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Tech Stack" key="3">
            <TechStack tools={tools}/>
        </TabPane>
      </Tabs>

      {/* Tech Stack Section */}
      <Divider />

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px' }}>
        <Paragraph>© {new Date().getFullYear()} {profile?.name || username}. All rights reserved.</Paragraph>
        <Paragraph>
          Contact me: <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
        </Paragraph>
      </footer>
    </div>
  );
};

export default HomePage;
