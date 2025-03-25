import { useState, useEffect } from "react";
const MemeList = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  return (
    <div>
      {memes.slice(0, 5).map((meme) => (
        <div key={meme.id}>
          <h3>{meme.name}</h3>
          <img src={meme.url} alt={meme.name} width="200" />
        </div>
      ))}
    </div>
  );
};

export default MemeList;
