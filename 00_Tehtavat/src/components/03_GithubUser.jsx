import { useState, useEffect } from "react";
export default function GitHubRepos({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, [username]);

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

// Käyttö:
<GitHubRepos username="facebook" />;
