import s from './Button.module.css';

function Button({ title, type }) {
  const aditionalClass = (type === 'active' && s.btnActive) || '';
  return (
    <>
      <button type="button" className={s.btn + ' ' + aditionalClass}>
        {title}
      </button>
    </>
  );
}

export default Button;
