import { useState, useEffect } from "react";
const Dog = () => {
  const [kuvat, setKuvat] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/5")
      .then((response) => response.json())
      .then((data) => setKuvat(data.message));
  }, []);

  return kuvat.map((kuva) => <img src={kuva} alt="" height="150px" />);
};

export default Dog;
