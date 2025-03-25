const CountryList = ({ countries }) => (
  <ul>
    {countries.map((country) => (
      <li>{country.name}</li>
    ))}
  </ul>
);

export default CountryList;
