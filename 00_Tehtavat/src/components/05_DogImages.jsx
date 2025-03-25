import { useState, useEffect } from "react";
const DogImages = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/5")
      .then((response) => response.json())
      .then((data) => setDogs(data.message));
  }, []);

  return (
    <div>
      {dogs.map((dog, index) => (
        <img key={index} src={dog} alt="Dog" width="150" />
      ))}
    </div>
  );
};

export default DogImages;
