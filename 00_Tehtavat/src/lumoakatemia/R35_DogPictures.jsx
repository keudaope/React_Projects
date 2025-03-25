import { useState, useEffect } from "react";

export default function DocPics() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/5")
      .then((response) => response.json())
      .then((data) => setDogs(data.message));
  }, []);

  return dogs.map((dog) => <img src={dog} alt="dog" height="150px" />);
}
