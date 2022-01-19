import PropTypes from 'prop-types';
import s from './Balance.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, updateBalance } from 'redux/user';
import { useEffect, useState } from 'react';

const BalanceForm = () => {
  const balance = useSelector(getBalance);
  const [balanceInput, setBalanceInput] = useState(balance);
  const dispatch = useDispatch();

  useEffect(() => {
    setBalanceInput(balance);
  }, [balance]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBalance(balanceInput));
  };

  return (
    <div className={s.balance}>
      <p className={s.balanceTitle}>Баланс:</p>
      <form className={s.balanceBox} onSubmit={handleSubmit}>
        <input
          className={s.balanceValue}
          value={balanceInput}
          onChange={e => setBalanceInput(e.target.value)}
        />
        <button type="submit" name="ПОДТВЕРДИТЬ" className={s.buttonBalance}>
          ПОДТВЕРДИТЬ
        </button>
      </form>
    </div>
  );
};

BalanceForm.propTypes = {};

export default BalanceForm;