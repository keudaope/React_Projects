export default function Kirja(props) {
  return (
    <>
      <h3>{props.kirja} </h3>
      <p>
        {props.kirjailija} {props.laji}{" "}
      </p>
    </>
  );
}
