import { useState, useEffect } from "react";
const MovieActors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/person/popular?api_key=YOUR_API_KEY")
      .then((response) => response.json())
      .then((data) => setActors(data.results));
  }, []);

  return (
    <div>
      {actors.map((actor) => (
        <p key={actor.id}>{actor.name}</p>
      ))}
    </div>
  );
};

export default MovieActors;
