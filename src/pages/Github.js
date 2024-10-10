// src/components/GitHubData.js
import React from 'react';
import { Row, Col, Card as AntCard, Divider, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import useGitHubOrganizations from '../hooks/useGitHubOrganizations';
import useGitHubOwnRepos from '../hooks/useGitHubOwnRepos';
const { Title } = Typography;

const GitHubData = ({ ptoken, username }) => {
    const validrepos = ['100098-DowellJobPortal', '100117-DoWell-Proctoring'];
    const validorgs = ['LL07-Team-Dowell'];

    // Use the custom hooks
    const organizations = useGitHubOrganizations(ptoken, username);
    const ownrepos = useGitHubOwnRepos(ptoken, username);
    return (
        <div style={{ marginBottom: '32px' }}>
            <Row gutter={16}>
            {ownrepos.map((repo) => (
              <Col
                key={repo.id}
                xs={24}  // Full width on extra-small screens (mobile)
                sm={12}   // 2 columns on small screens (tablets)
                md={8}    // 3 columns on medium screens (desktops)
                style={{ marginBottom: '16px' }}
              >
                <Link to={repo.html_url}>
                  <Card
                    title={repo.name}
                    description={repo.description}
                  />
                </Link>
              </Col>
            ))}
            {/* Organizations Section */}
          <Divider />
          <div style={{ marginBottom: '32px' }}>
            <Title level={3}>Organizations</Title>
            {organizations.map((org) => (
              validorgs.includes(org.name) ?
              <AntCard
                key={org.name}
                title={org.name}
                style={{
                  marginBottom: '16px',
                  backgroundColor: '#f0f2f5', // Cool background color for the organization card
                  borderRadius: '8px',
                }}
              >
                <Row gutter={16}>
                  {org.repos.map((repo) => (
                    validrepos.includes(repo.name) ? (
                      <Col
                        key={repo.id}
                        xs={24}  // Full width on extra-small screens (mobile)
                        sm={12}   // 2 columns on small screens (tablets)
                        md={8}    // 3 columns on medium screens (desktops)
                        style={{ marginBottom: '16px' }}
                      >
                        <Link to={repo.html_url}>
                          <Card
                            title={repo.name}
                            description={repo.description}
                            contribution={repo.contributions.contributions}
                            percentageContribution={repo.contributions.percentage}
                          />
                        </Link>
                      </Col>
                    ) :  null
                  ))}
                </Row>
              </AntCard>:<AntCard
                key={org.name}
                title={org.name}
                style={{
                  marginBottom: '16px',
                  backgroundColor: '#f0f2f5', // Cool background color for the organization card
                  borderRadius: '8px',
                }}
              >
                <Row gutter={16}>
                  {org.repos.map((repo) => (
                    <Col
                      key={repo.id}
                      xs={24}  // Full width on extra-small screens (mobile)
                      sm={12}   // 2 columns on small screens (tablets)
                      md={8}    // 3 columns on medium screens (desktops)
                      style={{ marginBottom: '16px' }}
                    >
                      <Link to={repo.html_url}>
                        <Card
                          title={repo.name}
                          description={repo.description}
                          contribution={repo.contributions.contributions}
                          percentageContribution={repo.contributions.percentage}
                        />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </AntCard>
            ))}
          </div>
          </Row>
        </div>
    );
};

export default GitHubData;
