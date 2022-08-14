import { StyledCheckbox } from './checkbox.styled';
const Checkbox = ({ label, name, value, isChecked, onChange, disabled }) => (
  <StyledCheckbox>
    {label}
    <input
      type='checkbox'
      name={name}
      value={value}
      checked={isChecked}
      onChange={(e) => onChange(e)}
      disabled={disabled}
    />
    <span className='checkmark' />
  </StyledCheckbox>
);

export default Checkbox;
