import s from './Buttons.module.css';

function ButtonPrimary({ title }) {
  return (
    <>
      <button className={s.btnActive + ' ' + s.btn}>{title}</button>
    </>
  );
}

export default ButtonPrimary;
