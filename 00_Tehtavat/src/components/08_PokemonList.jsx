import { useState, useEffect } from "react";
const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <div>
          <li key={pokemon.name}>{pokemon.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default PokemonList;
