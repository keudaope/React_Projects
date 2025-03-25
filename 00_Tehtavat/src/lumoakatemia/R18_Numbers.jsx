export default function Numbers() {
  const numerot = [1, 2, 3, 4, 5];
  return numerot.map((numero) => <p key={numero}>{numero}</p>);
}
