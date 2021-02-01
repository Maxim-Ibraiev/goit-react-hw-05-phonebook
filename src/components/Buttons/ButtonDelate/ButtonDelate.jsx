import s from './ButtonDelate.module.scss';

export default function ButtonDelate({ onClick }) {
  return <button className={s.button} onClick={onClick}></button>;
}
