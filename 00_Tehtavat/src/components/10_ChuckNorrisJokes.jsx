import { useState, useEffect } from "react";
const ChuckNorrisJokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJokes([data]));
  }, []);

  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>{joke.value}</li>
      ))}
    </ul>
  );
};

export default ChuckNorrisJokes;
