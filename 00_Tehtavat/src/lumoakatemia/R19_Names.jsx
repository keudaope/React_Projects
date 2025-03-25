export default function Names() {
  const nimet = ["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"];
  return nimet.map((nimi) => <p key={nimi}>{nimi}</p>);
}
