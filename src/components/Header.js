import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const links = {
  'Skills': '/skills',
  'Projects': '/projects',
  'Experience': '/experience',
  'Education': '/education',
  'Resume': '/resume',
};

const HeaderComponent = ({ myname }) => {
  const [nameColor, setNameColor] = useState('#000'); // Initial color

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setNameColor(randomColor);
    }, 3500); // Change color every 3.5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: "white" }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '24px', minWidth: '120px', color: nameColor }}>{myname}</Link>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ flex: 1, minWidth: 0 }}
        expandIcon={<MenuOutlined style={{ fontSize: '1.5rem', marginRight: '24px' }} />}
      >
        {Object.entries(links).map(([label, link]) => (
          <Menu.Item key={label} ><Link to={link}>{label}</Link></Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
