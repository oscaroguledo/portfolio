import React, { useState } from 'react';
import { Layout, Breadcrumb, Card, Row, Col, Pagination, Input } from 'antd';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

const { Content } = Layout;

const ProjectsPage = ({ myname, projects }) => {
  // Sample projects data
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4); // Number of projects per page

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination values
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalProjects);

  // Function to handle pagination change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <HeaderComponent myname={myname} />
      <Content style={{ padding: '0 8px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
        <div style={{ minHeight: 280, padding: 24, borderRadius: 6, background: '#fff' }}>
          <h1>Projects</h1>
          <Input.Search
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 16 }}
          />
          <Row gutter={[16, 16]}>
            {filteredProjects.slice(startIndex, endIndex).map((project, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={<img alt={project.title} src={project.image} />}
                >
                  <Card.Meta title={project.title} description={project.description} />
                </Card>
              </Col>
            ))}
          </Row>
          {totalProjects > pageSize && (
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <Pagination current={currentPage} pageSize={pageSize} total={totalProjects} onChange={handlePageChange} />
            </div>
          )}
        </div>
      </Content>
      <FooterComponent myname={myname} />
    </Layout>
  );
};

export default ProjectsPage;
