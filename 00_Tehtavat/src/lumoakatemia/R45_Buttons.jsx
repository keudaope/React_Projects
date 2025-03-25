export default function Buttons({ buttons }) {
  return buttons.map((button) => (
    <button key={button.id}>{button.label}</button>
  ));
}
