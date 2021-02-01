import s from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ text }) {
  return (
    <button className={s.button} type="submit">
      {text}
    </button>
  );
}
