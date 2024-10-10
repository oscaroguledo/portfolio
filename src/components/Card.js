import React from 'react';
import { Card as AntCard, Tag } from 'antd'; // Import Tag and Card from antd

const { Meta } = AntCard;


const Card = ({ title, to, description,contribution, percentageContribution }) => (
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
          <div>
            {description}
          </div>
        </div>
      }
    />
  </AntCard>
);

export default Card;
