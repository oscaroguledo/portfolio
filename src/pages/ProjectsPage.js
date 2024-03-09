import React from 'react';
import { Layout,Breadcrumb } from 'antd';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
const { Content} = Layout;

const ProjectsPage = ({myname}) => {
  const bimg = "url('your-image-url.jpg')"; // Replace 'your-image-url.jpg' with the URL of your background image
  return (
    <Layout style={{ backgroundImage: bimg, backgroundSize: 'cover' }}>
      <HeaderComponent myname={myname} /> 
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          
        </Breadcrumb>
        <div style={{ minHeight: 280, padding: 24, borderRadius: 6, background: '#fff' }}>
          <h1>fvfdv</h1>
        </div>
      </Content>
      <FooterComponent myname={myname} /> 
    </Layout>
  );
};

export default ProjectsPage;
