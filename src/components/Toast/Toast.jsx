import s from './Toast.module.css';
import { ReactComponent as CloseIcon } from 'images/close.svg';

const Toast = onClose => {
  return (
    <div className={s.Toast}>
      <div className={s.tringle} />
      <div className={s.rectangle}>
        <CloseIcon onClick={onClose} className={s.icon} />
        <p className={s.text}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={s.textDown}>
          Ты не можешь тратить деньги пока их у тебя нет ;)
        </p>
      </div>
    </div>
  );
};
export default Toast;
