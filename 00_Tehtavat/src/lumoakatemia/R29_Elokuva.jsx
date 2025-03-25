export default function Elokuva(props) {
  return (
    <div>
      <h3>{props.nimi} </h3>
      <p>
        {props.ohjaaja} - {props.vuosi}
      </p>
    </div>
  );
}
