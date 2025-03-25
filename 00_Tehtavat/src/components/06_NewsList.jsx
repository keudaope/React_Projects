import { useState, useEffect } from "react";
const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=782e5edacf1f48eeb407d730722f6d4d"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div>
      {news.map((article) => (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
