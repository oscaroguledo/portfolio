// src/hooks/useGitHubOrganizations.js
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

const useGitHubOrganizations = (token, username) => {
  const [organizations, setOrganizations] = useState([]);
  const per_page = 100; // Number of items per page

  useEffect(() => {
    const octokit = new Octokit({ auth: token });

    const fetchOrganizationsAndRepos = async () => {
      try {
        const { data: orgs } = await octokit.orgs.listForAuthenticatedUser();
        const orgsWithRepos = await Promise.all(orgs.map(async (org) => {
          const { data: repos } = await octokit.repos.listForOrg({ org: org.login });

          const reposWithContributors = await Promise.all(repos.map(async (repo) => {
            try {
              const { data: branches } = await octokit.repos.listBranches({ owner: org.login, repo: repo.name });

              let contributionsCount = 0;
              let totalContributionsCount = 0;

              await Promise.all(branches.map(async (branch) => {
                const { data: commits } = await octokit.repos.listCommits({
                  owner: org.login,
                  repo: repo.name,
                  sha: branch.name,
                  author: username,
                  per_page: per_page,
                });

                const { data: totalCommits } = await octokit.repos.listCommits({
                  owner: org.login,
                  repo: repo.name,
                  sha: branch.name,
                  per_page: per_page,
                });

                contributionsCount += commits.length;
                totalContributionsCount += totalCommits.length;
              }));

              const { data: languages } = await octokit.repos.listLanguages({ owner: org.login, repo: repo.name });
              const tools = Object.keys(languages);

              return {
                ...repo,
                contributions: {
                  contributions: contributionsCount,
                  percentage: totalContributionsCount > 0
                    ? ((contributionsCount / totalContributionsCount) * 100).toFixed(2)
                    : 0,
                },
                tools,
              };

            } catch (error) {
              console.error(`Failed to fetch contributors for repo ${repo.name}:`, error);
              return {
                ...repo,
                contributions: { contributions: 0, percentage: 0 },
                tools: [],
              };
            }
          }));

          return {
            name: org.login,
            repos: reposWithContributors,
          };
        }));

        setOrganizations(orgsWithRepos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrganizationsAndRepos();
  }, [token, username]); // Add dependencies to re-run effect when token or username changes

  return organizations;
};

export default useGitHubOrganizations;
