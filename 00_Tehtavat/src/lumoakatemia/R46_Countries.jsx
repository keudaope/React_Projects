export default function Countries({ countries }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>
          <p>
            {country.name} - {country.capital}
          </p>
        </li>
      ))}
    </ul>
  );
}
