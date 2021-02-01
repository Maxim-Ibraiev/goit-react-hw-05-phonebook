// import InputTextAnimation from '../../renderProp/InputTextAnimation';
import s from './Input.module.scss';

function Input({
  label,
  name = label.toLowerCase(),
  value,
  onChange,
  autoComplete = null,
}) {
  return (
    <div className={s.container}>
      <input
        id={label}
        className={s.input}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder=" "
      />
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
    </div>
  );
}

export default Input;
// export default InputTextAnimation(Input);
