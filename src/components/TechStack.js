// src/components/TechStack.js
import React from 'react';
import { Tag } from 'antd';
import Title from 'antd/es/typography/Title';

// Map of tech icons with FontAwesome classes
const techIcons = {
  React: 'fa-brands fa-react',
  Node: 'fa-brands fa-node-js',
  HTML: 'fa-brands fa-html5',
  CSS: 'fa-brands fa-css3-alt',
  Git: 'fa-brands fa-git-alt',
  JavaScript: 'fa-brands fa-js-square',
  Python: 'fa-brands fa-python',
  Django: 'fa-brands fa-python',
  FastAPI: 'fa-light fa-code',
  'Django REST Framework': 'fa-light fa-code',
  Ninja: 'fa-light fa-code',
  Pandas: 'fa-light fa-code',
  NumPy: 'fa-light fa-code',
  MongoDB: 'fa-brands fa-database',
  PostgreSQL: 'fa-brands fa-database',
  MySQL: 'fa-brands fa-database',
  SQLite3: 'fa-brands fa-database',
  Kivy: 'fa-light fa-code',
  jQuery: 'fa-brands fa-square-js',
  'React Native': 'fa-brands fa-react',
  C: 'fa-light fa-code',
  Bash: 'fa-light fa-terminal',
  Shell: 'fa-light fa-terminal',
  Docker: 'fa-brands fa-docker',
  Redis: 'fa-brands fa-database',
  Kafka: 'fa-light fa-code',
  'Django Channels': 'fa-light fa-code',
  AWS: 'fa-brands fa-aws',
  Heroku: 'fa-light fa-code',
  PythonAnywhere: 'fa-light fa-code',
  Namecheap: 'fa-light fa-code',
  'GitHub': 'fa-brands fa-github',
  'GitLab': 'fa-brands fa-gitlab',
  Figma: 'fa-light fa-code',
  Bootstrap: 'fa-brands fa-bootstrap',
  GraphQL: 'fa-light fa-code',
  'RESTful APIs': 'fa-light fa-code',
  Nginx: 'fa-light fa-code',
  Celery: 'fa-light fa-code',
  Flask: 'fa-light fa-code',
  Scrapy: 'fa-light fa-code',
  'Beautiful Soup': 'fa-light fa-code',
  'Jupyter Notebook': 'fa-light fa-code',
  OpenCV: 'fa-light fa-code',
  Keras: 'fa-light fa-code',
  TensorFlow: 'fa-light fa-code',
  Postman: 'fa-light fa-code',
  Insomnia: 'fa-light fa-code',
  Pillow: 'fa-light fa-code',
  SQLite: 'fa-brands fa-database',
  JWT: 'fa-light fa-code',
  OAuth: 'fa-light fa-code',
  WebSocket: 'fa-light fa-code',
  TypeScript: 'fa-brands fa-js-square',
  Redux: 'fa-brands fa-react',
  Microservices: 'fa-light fa-code',
  Serverless: 'fa-light fa-code',
  'Socket.IO': 'fa-light fa-code',
  DigitalOcean: 'fa-light fa-code',
  'CI/CD': 'fa-light fa-code',
  'GitHub Actions': 'fa-light fa-code',
  Babel: 'fa-light fa-code',
  'Apache Kafka': 'fa-light fa-code',
  'Scikit-Learn': 'fa-light fa-code',
  Matplotlib: 'fa-light fa-code',
  Seaborn: 'fa-light fa-code',
  'Data Visualization': 'fa-light fa-code',
  'QR Code Generation': 'fa-light fa-code',
};

const getColor = (index) => {
  const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
  return colors[index % colors.length];
};

const TechStack = ({ tools }) => {
  return (
    <div>
      <Title level={3}>My Tech Stack</Title>
      <div>
        {tools.map((tool, index) => (
          <Tag key={index} icon={<i className={techIcons[tool] || 'fa-light fa-code'} style={{ marginRight: '5px', color:'black' }} />} color={getColor(index)} style={{ margin: '2px' }}>
            {tool}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
