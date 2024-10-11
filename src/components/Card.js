import React from 'react';
import { Card as AntCard, Tag } from 'antd'; // Import Tag and Card from antd
import Paragraph from 'antd/es/typography/Paragraph';

const { Meta } = AntCard;

// Function to generate a color based on index
const getColor = (index) => {
  const colors = [
    '#FF5733', // Red
    '#FF8D33', // Orange
    '#FFC300', // Yellow
    '#DAF7A6', // Light Green
    '#33FF57', // Green
    '#33FF8D', // Teal
    '#33C1FF', // Cyan
    '#337BFF', // Blue
    '#3351FF', // Dark Blue
    '#6A33FF', // Purple
    '#A633FF', // Violet
  ];
  return colors[index % colors.length]; // Cycle through the colors
};

const Card = ({ title, to, description, tools, contribution, percentageContribution }) => (
  <AntCard
    hoverable
    bordered
    title={title}
    size="small"
    extra={<a href={to}>View</a>}
    actions={[
        contribution?<span key="contribution">Contributions: {contribution}</span>:null,
      contribution?<span key="percentage">Contribution Percentage: {percentageContribution}%</span>:null,
    ]}
    style={{
      minWidth:300,
    }}
  >
    <Meta
      description={
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Paragraph>{description || 'No description provided'}</Paragraph>
          <div>
            {tools?.map((tool, index) => (
              <Tag key={index} color={getColor(index)} style={{margin:'1px'}} >
                {tool}
              </Tag>
            ))}
          </div>
        </div>
      }
    />
  </AntCard>
);

export default Card;
