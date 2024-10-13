import React from 'react';
import { Row, Col, Typography, Avatar, Button, Tabs } from 'antd'; // Import necessary components from antd
import useGitHubProfile from '../hooks/useGitHubProfile';
import TechStack from '../components/TechStack';
import GitHubData from './Github';
import GitLabData from './Gitlab';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const HomePage = ({ ptoken, username, gitlabtoken }) => {
  const profile = useGitHubProfile(ptoken);

  // Function to download CV from the assets folder
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + "/Oscar's_resume.pdf"; // Use PUBLIC_URL to correctly link to the assets folder in React
    link.download = "oscar_oguledo_cv.pdf"; // Name of the downloaded file
    link.click();
  };

  // Complete tech stack tools
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
    'TypeScript', 'Redux', 'Microservices', 'Serverless', 'Socket.IO', 'DigitalOcean', 
    'CI/CD', 'GitHub Actions', 'Babel',
    'Apache Kafka', 'Scikit-Learn', 
    'Matplotlib', 'Seaborn', 'Data Visualization', 
    'QR Code Generation',
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Section */}
      <Row gutter={16} style={{ marginBottom: '32px', marginTop:'20px' }}>
        <Col span={6}>
          <Avatar
            size={150}
            src={profile?.avatar_url || 'https://media.licdn.com/dms/image/v2/D4E03AQHfXJrkDnrIsg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718694984467?e=1733961600&v=beta&t=W620luJ5LLqFYCNSKYjayO1xzXSOzCa0NmFboJ3xiZY'}
            alt="Profile Picture"
          />
        </Col>
        <Col span={18} style={{ textAlign: 'left' }}>
          <Title level={2}>{profile?.name || username}</Title>
          <Paragraph>
            <strong>GitHub Username:</strong> <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">{username}</a>
          </Paragraph>
          <Paragraph>
            <strong>GitLab Username:</strong> <a href='https://gitlab-student.macs.hw.ac.uk/oco2000' target="_blank" rel="noopener noreferrer">{profile?.gitlab_username || 'oco2000'}</a>
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> <a href={`mailto:${profile?.email || 'oscarchiagoziem@gmail.com'}`}>{profile?.email || 'oscarchiagoziem@gmail.com'}</a>
          </Paragraph>
          <Paragraph>
            <strong>LinkedIn:</strong> <a href={profile?.linkedin || 'https://www.linkedin.com/in/oscar-oguledo-341bb2206'} target="_blank" rel="noopener noreferrer">{profile?.linkedin || 'https://www.linkedin.com/in/oscar-oguledo-341bb2206'}</a>
          </Paragraph>
          <Paragraph>
            <strong>Website:</strong> <a href={profile?.website || 'https://oscaroguledo.github.io/portfolio/'} target="_blank" rel="noopener noreferrer">{profile?.website || 'https://oscaroguledo.github.io/portfolio/'}</a>
          </Paragraph>
          <Button type="primary" onClick={downloadCV} style={{ marginTop: '16px', color:'black', backgroundColor:'red' }}>Download CV</Button>
        </Col>
      </Row>

      {/* Tabs for Projects */}
      <Tabs defaultActiveKey="1" style={{ marginBottom: '32px' }}>
        <TabPane tab="GitHub Projects" key="1">
          <GitHubData ptoken={ptoken} username={username} />
        </TabPane>
        <TabPane tab="GitLab Projects" key="2">
          <GitLabData gitlabtoken={gitlabtoken} />
        </TabPane>
        <TabPane tab="Tech Stack" key="3">
          <TechStack tools={tools} />
        </TabPane>
      </Tabs>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px' }}>
        <Paragraph>© {new Date().getFullYear()} {profile?.name || username}. All rights reserved.</Paragraph>
        <Paragraph>
          Contact me: <a href={`mailto:${profile?.email || 'oscarchiagoziem@gmail.com'}`}>{profile?.email || 'oscarchiagoziem@gmail.com'}</a>
        </Paragraph>
      </footer>
    </div>
  );
};

export default HomePage;
