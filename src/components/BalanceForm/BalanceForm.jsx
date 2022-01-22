import s from './Balance.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getBalance, updateBalance } from 'redux/user';
import { useEffect, useMemo, useState } from 'react';
import Toast from 'components/Toast';
import { getMonthStatsExpenses, getMonthStatsIncomes } from 'redux/transaction';

const BalanceForm = () => {
  const balance = useSelector(getBalance);
  const incomes = useSelector(getMonthStatsIncomes);
  const expenses = useSelector(getMonthStatsExpenses);
  const dispatch = useDispatch();

  const isBalanceSet = useMemo(() => {
    const isZeroBalance = balance === 0;
    const areExpensesAbsent = Object.values(incomes).every(
      value => value === 'N/A',
    );
    const areIncomesAbsent = Object.values(expenses).every(
      value => value === 'N/A',
    );
    return isZeroBalance && areExpensesAbsent && areIncomesAbsent;
  }, []);

  const [canChange, setCanChange] = useState(isBalanceSet);
  const [balanceInput, setBalanceInput] = useState(balance ?? '');
  const [balanceBackup, setBalanceBackup] = useState(balanceInput);

  const addCurrency = value => `${value} UAH`;

  useEffect(() => {
    if (balance) {
      setBalanceInput(addCurrency(balance));
      setCanChange(false);
      return;
    }

    setCanChange(true);
  }, [balance]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, incomes, expenses]);

  const handleChange = e => {
    if (e.target.value === '') {
      setBalanceInput('0');
      return;
    }

    const num = parseInt(e.target.value);
    if (num) {
      setBalanceInput(String(num));
    }
  };

  const handleFocus = () => {
    setBalanceBackup(balanceInput);
    setBalanceInput('');
  };

  const handleBlur = () => {
    if (balanceInput === '') {
      setBalanceInput(balanceBackup);
      return;
    }

    const num = parseInt(balanceInput);
    setBalanceInput(addCurrency(num));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (balanceInput) {
      dispatch(updateBalance(parseInt(balanceInput)));
    }
  };

  return (
    <div className={s.balance}>
      <p className={s.balanceTitle}>Баланс:</p>
      <form className={s.balanceBox} onSubmit={handleSubmit}>
        <input
          className={s.balanceValue}
          value={balanceInput}
          placeholder={'0 UAH'}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <button
          type={'submit'}
          name={'approve'}
          className={
            canChange ? s.balanceButtonEnabled : s.balanceButtonDisabled
          }
        >
          ПОДТВЕРДИТЬ
        </button>
        {canChange && <Toast />}
      </form>
    </div>
  );
};

export default BalanceForm;
