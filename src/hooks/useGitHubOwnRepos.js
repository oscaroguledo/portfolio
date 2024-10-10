// src/hooks/useGitHubOwnRepos.js
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

const useGitHubOwnRepos = (token, username) => {
  const [ownrepos, setOwnrepos] = useState([]);
  const per_page = 100; // Number of items per page

  useEffect(() => {
    const octokit = new Octokit({ auth: token });

    const fetchOwnRepos = async () => {
      try {
        const { data: repos } = await octokit.repos.listForAuthenticatedUser({ per_page: per_page });

        const reposWithContributions = await Promise.all(repos.map(async (repo) => {
          if (repo.owner.login === username) {
            try {
              const { data: languages } = await octokit.repos.listLanguages({
                owner: username,
                repo: repo.name,
              });

              const tools = Object.keys(languages);
              return {
                ...repo,
                tools,
              };
            } catch (error) {
              console.error(`Failed to fetch languages for own repo ${repo.name}:`, error);
              return {
                ...repo,
                tools: [],
              };
            }
          }
          return null; // Return null for repos owned by organizations
        }));

        setOwnrepos(reposWithContributions.filter(repo => repo !== null)); // Filter out null entries
      } catch (error) {
        console.error(error);
      }
    };

    fetchOwnRepos();
  }, [token, username]); // Add dependencies to re-run effect when token or username changes

  return ownrepos;
};

export default useGitHubOwnRepos;
