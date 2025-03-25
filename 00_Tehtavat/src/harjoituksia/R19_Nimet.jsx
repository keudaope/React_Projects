const Nimet = () => {
  const nimet = ["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"];

  return nimet.map((nimi, index) => <p key={index}>{nimi}</p>);
};
export default Nimet;
