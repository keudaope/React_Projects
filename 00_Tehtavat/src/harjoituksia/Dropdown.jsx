const Dropdown = ({ options }) => (
  <select name="" id="">
    {options.map((option) => (
      <option value="">{option.label}</option>
    ))}
  </select>
);

export default Dropdown;
