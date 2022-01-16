import s from './Buttons.module.css';

function ButtonSecondary(props) {
  return (
    <>
      <button type="button" className={s.btn}>
        {props.title}
      </button>
    </>
  );
}

export default ButtonSecondary;
