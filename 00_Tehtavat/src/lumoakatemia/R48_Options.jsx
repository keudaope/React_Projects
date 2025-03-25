export default function Options({ options }) {
  return (
    <select name="" id="">
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
