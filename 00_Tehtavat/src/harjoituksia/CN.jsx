import { useState, useEffect } from "react";
const ChuckNorris = () => {
  const [vitsit, setVitsit] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setVitsit([data]));
  }, []);

  return (
    <ul>
      {vitsit.map((vitsi) => (
        <li key={vitsi.id}>{vitsi.value}</li>
      ))}
    </ul>
  );
};

export default ChuckNorris;
