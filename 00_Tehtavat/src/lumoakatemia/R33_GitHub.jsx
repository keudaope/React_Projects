import { useState, useEffect } from "react";
export default function GitHub({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return repos.map((repo) => <h3>{repo.name}</h3>);
}
