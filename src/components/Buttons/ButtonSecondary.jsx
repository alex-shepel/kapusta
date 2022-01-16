import s from './Buttons.module.css';

function ButtonSecondary(props) {
  return (
    <>
      <button className={s.btn}>{props.title}</button>
    </>
  );
}

export default ButtonSecondary;
