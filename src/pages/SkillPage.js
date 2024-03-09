import React, { useState } from 'react';
import { Layout, Breadcrumb, Input, Card, Row, Col, Pagination } from 'antd'; // Import Input, Card, Row, and Col components
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import Search from '../components/Search';
const { Content } = Layout;

const SkillPage = ({ myname,skills }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(18); // Number of experiences per page
  
   
  // Filter skills based on search term
  const filteredSkills = skills.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Calculate pagination values
  const totalSkills = filteredSkills.length;
  const totalPages = Math.ceil(totalSkills / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalSkills);

  // Function to handle pagination change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <HeaderComponent myname={myname} />
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
        
        <Search searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Row gutter={[16, 16]}> {/* Add gutter to create spacing between cards */}
          {filteredSkills.slice(startIndex, endIndex).map((skill, index) => (
            <Col key={skill.title} xs={12} sm={12} md={8} lg={6} xl={4}>
              {/* Specify column size for different screen sizes */}
              <Card
                hoverable
                cover={<img alt={skill.title} src={skill.img} style={{ height: '70px',width: '75px', justifyContent:'center'}} />} // Set height and object fit for image
                style={{ height: '100%', padding:'20px' }} // Set height for card
              >
                <Card.Meta title={skill.title} style={{ maxHeight: '30px' }} /> {/* Set min height for title */}
              </Card>
            </Col>
          ))}
        </Row>
        {totalSkills > pageSize && (
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <Pagination current={currentPage} pageSize={pageSize} total={totalSkills} onChange={handlePageChange} />
            </div>
          )}
      </Content>
      <FooterComponent myname={myname} />
    </Layout>
  );
};

export default SkillPage;
