import { useState, useEffect } from "react";

export default function News() {
  const [uutiset, setUutiset] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
      .then((response) => response.json())
      .then((data) => setUutiset(data.articles));
  }, []);

  return uutiset.map((uutinen) => (
    <>
      <img src={uutinen.urlToImage} alt="" height="150px" />
      <h3>{uutinen.description}</h3>
      <p>{uutinen.content}</p>
    </>
  ));
}
