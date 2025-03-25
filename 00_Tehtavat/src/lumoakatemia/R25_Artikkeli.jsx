export default function Artikkeli(props) {
  return (
    <div>
      <h3>{props.otsikko}</h3>
      <p>{props.teksti}</p>
    </div>
  );
}
