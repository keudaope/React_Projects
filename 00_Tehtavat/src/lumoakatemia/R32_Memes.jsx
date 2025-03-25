import { useState, useEffect } from "react";
export default function Memes() {
  const [meemit, setMeemit] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMeemit(data.data.memes));
  });

  return meemit.map((meemi) => (
    <div key={meemi.id} className="user">
      <img src={meemi.url} alt={meemi.name} height="150px" />
      <h3>{meemi.name}</h3>
    </div>
  ));
}
