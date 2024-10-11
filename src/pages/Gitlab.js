// src/components/GitLabData.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { Gitlab } from '@gitbeaker/browser';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const GitLabData = ({gitlabtoken}) => {
  const [projects, setProjects] = useState([]); // State for personal projects
  const [organizations, setOrganizations] = useState([]); // State for organizations
  const [starredProjects, setStarredProjects] = useState([]); // State for starred projects
  
  // Use environment variables for the token and username
  const gitlabToken = process.env.REACT_APP_GITLAB_USER_TOKEN || gitlabtoken; 
  //const gitlabUsername = process.env.REACT_APP_GITLAB_USERNAME || 'oco2000';

  // Initialize the Gitlab API client
  const api = new Gitlab({
    host: 'https://gitlab-student.macs.hw.ac.uk', 
    token: gitlabToken,
  });

  // Fetch user-owned projects
  const fetchProjects = async () => {
    try {
      const personalProjects = await api.Projects.all({ owned: true });
      setProjects(personalProjects);
    } catch (error) {
      console.error('Error fetching personal projects:', error);
    }
  };

  // Fetch starred projects
  const fetchStarredProjects = async () => {
    try {
      const starredProjects = await api.Projects.all({ starred: true });
      setStarredProjects(starredProjects);
    } catch (error) {
      console.error('Error fetching starred projects:', error);
    }
  };


  // Fetch organizations
  const fetchOrganizations = async () => {
    try {
      const response = await api.Groups.all({ per_page: 100 });
      setOrganizations(response);
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchStarredProjects();
    fetchOrganizations();
  }, []);

  return (
    <div>
      {/* Personal Projects */}
      <Title level={2}>Projects</Title>
      <Row gutter={16}>
        {projects.map((project) => (
          <Col
            key={project.id}
            xs={24}
            sm={12}
            md={8}
            style={{ marginBottom: '16px' }}
          >
            <Link to={project.web_url}>
                <Card
                title={project.name}
                to={project.web_url}
                description={project.description}
                />
            </Link>
          </Col>
        ))}
      </Row>

      <Divider />

      {/* Starred Projects */}
      <Title level={3}>Starred Projects</Title>
      <Row gutter={16}>
        {starredProjects.map((project) => (
          <Col
            key={project.id}
            xs={24}
            sm={12}
            md={8}
            style={{ marginBottom: '16px' }}
          >
                <Link to={project.web_url}>
                  <Card
                    title={project.name}
                    to={project.web_url}
                    description={project.description}
                  />
                </Link>
          </Col>
        ))}
      </Row>

      <Divider />

      <Divider />

      {/* Organizations */}
      <Title level={2}>GitLab Organizations</Title>
      <Row gutter={16}>
        {organizations.map((org) => (
          <Col
            key={org.id}
            xs={24}
            sm={12}
            md={8}
            style={{ marginBottom: '16px' }}
          >
            <Link to={org.web_url}>
                  <Card
                    title={org.name}
                    to={org.web_url}
                    description={org.description}
                  />
                </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GitLabData;
