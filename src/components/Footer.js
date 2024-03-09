
import React from 'react';
import { Layout} from 'antd';
const { Footer } = Layout;

const FooterComponent = ({myname}) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
        {myname} ©{new Date().getFullYear()}
    </Footer>
  );
};

export default FooterComponent;
