import { useState, useEffect } from "react";
const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13409431f7d69849d94ea144476fdaea&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.main));
  }, [city]);

  return weather ? (
    <p>
      {city}: {weather.temp}°C
    </p>
  ) : (
    <p>Ladataan...</p>
  );
};

export default Weather;
// Käyttö:
//<Weather city="Helsinki" />;
