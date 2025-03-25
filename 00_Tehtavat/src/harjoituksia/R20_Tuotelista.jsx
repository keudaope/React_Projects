const Tuotelista = () => {
  const tuotteet = [
    { nimi: "Tuote 1", hinta: 10 },
    { nimi: "Tuote 2", hinta: 20 },
    { nimi: "Tuote 3", hinta: 30 },
    { nimi: "Tuote 4", hinta: 40 },
    { nimi: "Tuote 5", hinta: 50 },
  ];
  return tuotteet.map((tuote) => (
    <div>
      <h3>{tuote.nimi}</h3>
      <p>{tuote.hinta}</p>
    </div>
  ));
};
export default Tuotelista;
