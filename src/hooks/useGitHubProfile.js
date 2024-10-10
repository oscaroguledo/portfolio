// src/hooks/useGitHubProfile.js
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

const useGitHubProfile = (token) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const octokit = new Octokit({ auth: token });

    const fetchProfile = async () => {
        setLoading(true);
        try {
            const { data } = await octokit.rest.users.getAuthenticated();
            setProfile(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchProfile();
        }
    }, [token]);

    return { profile, loading, error };
};

export default useGitHubProfile;
