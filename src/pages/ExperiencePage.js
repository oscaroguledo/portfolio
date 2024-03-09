import React, { useState } from 'react';
import { Layout, Breadcrumb, Card, Col, Row,Pagination,Modal, Button} from 'antd';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Search from '../components/Search';
const { Content } = Layout;

const ExperiencePage = ({ myname, experiences }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4); // Number of experiences per page

  

  // Filter experiences based on search term
  const filteredExperiences = experiences.filter((experience) =>
    experience.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination values
  const totalExperiences = filteredExperiences.length;
  const totalPages = Math.ceil(totalExperiences / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalExperiences);

  // Function to handle pagination change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const CustomIcon = ({imgurl, name}) => (
    <img src={imgurl} alt={name} style={{ width: '24px', height: '24px' }} />
  );
  
  const info = (experience) => {
    Modal.info({
      title: '  '+experience.company+ ' (' + experience.duration+') ',
      content: (
        <div>
          <p >{experience.position}</p>
          <p>{experience.description}</p>
        </div>
      ),
      icon: <CustomIcon imgurl={experience.logo} name={experience.company} />,
      onOk() {},
    });
  };

  return (
    <Layout>
      <HeaderComponent myname={myname} />
      <Content style={{ padding: '0 8px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div style={{ minHeight: 280, padding: 24, borderRadius: 6, background: '#fff' }}>
          <h1>Experience</h1>
          <Search searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Row gutter={[16, 16]}>
            {filteredExperiences.slice(startIndex, endIndex).map((experience, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
                <Card title={experience.company} extra={experience.duration} hoverable onClick={()=>info(experience)}>
                  <p><strong>Position:</strong> {experience.position}</p>
                  <p>{experience.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
          {totalExperiences > pageSize && (
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <Pagination current={currentPage} pageSize={pageSize} total={totalExperiences} onChange={handlePageChange} />
            </div>
          )}
        </div>
      </Content>
      <FooterComponent myname={myname} />
    </Layout>
  );
};

export default ExperiencePage;
