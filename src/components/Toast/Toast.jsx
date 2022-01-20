import s from './Toast.module.css';

const Toast = () => {
  return (
    <div className={s.toast}>
      <div className={s.tringle}></div>
      <div className={s.rectangle}>
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
