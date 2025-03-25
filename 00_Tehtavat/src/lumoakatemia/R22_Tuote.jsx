export default function Tuote(props) {
  return (
    <div>
      <h3>{props.tuote}</h3>
      <p>{props.hinta}</p>
    </div>
  );
}
