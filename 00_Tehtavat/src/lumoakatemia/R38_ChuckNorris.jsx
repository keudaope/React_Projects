import { useState, useEffect } from "react";

export default function ChuckNorris() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJokes([data]));
  }, []);

  return jokes.map((joke, index) => (
    <div key={index}>
      <img src={joke.icon_url} alt="ChuckNorris" />
      <p>{joke.value}</p>
    </div>
  ));
}
