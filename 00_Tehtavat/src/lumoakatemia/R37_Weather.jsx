import { useState, useEffect } from "react";

export default function Weather({ city }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather([data]));
  }, []);

  return weather.map((saa) => (
    <>
      <h3>{saa.name}</h3>
      <p>Lämpötila: {saa.main.temp}</p>
    </>
  ));
}
