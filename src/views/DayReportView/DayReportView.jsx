import s from './DayReportView.module.css';
import { useEffect, useState } from 'react';
import IncomesExpenseList from 'components/IncomesExpenseList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchExpense,
  fetchIncome,
  getFilterExpTrans,
  getFilterIncTrans,
} from 'redux/transaction';

import Summary from 'components/Summary';
import TransactionForm from 'components/TransactionForm';
import { ReactComponent as ReportPic } from 'images/bar-chart.svg';
import { Link } from 'react-router-dom';
import { Toast } from 'components/Toast/Toast';

const startBalance = () => {};

const DayReportView = () => {
  const expenses = useSelector(getFilterExpTrans);
  const incomes = useSelector(getFilterIncTrans);
  const [isExpenses, setIsExpenses] = useState(true);

  const [isExpensesTabActive, setExpensesTabActive] = useState(true);
  const [isIncomesTabActive, setIsIncomesTabActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleToggle = () => {
    setIsIncomesTabActive(!isIncomesTabActive);
    setExpensesTabActive(!isExpensesTabActive);
  };

  return (
    <>
      <div className={s.section}>
        <div className={s.balance}>
          <p className={s.balanceTitle}>Баланс:</p>
          <div className={s.balanceBox}>
            <div className={s.balanceMeaning}>BALANCE</div>
            <button
              type="button"
              name="ПОДТВЕРДИТЬ"
              onClick={startBalance}
              className={s.buttonBalance}
            >
              ПОДТВЕРДИТЬ
            </button>
            <Toast></Toast>
          </div>
        </div>
        <Link to={'/month-report'} className={s.goToReport}>
          Перейти к отчетам
          <ReportPic className={s.reportPic} alt={'reportPic'} />
        </Link>
      </div>
      <div className={s.mainWrapper}>
        <div className={s.buttonsHolder}>
          <button
            type="button"
            className={isExpensesTabActive ? s.navBtnActive : s.navBtn}
            onClick={() => {
              setIsExpenses(true);
              handleToggle();
            }}
          >
            Расход
          </button>
          <button
            type="button"
            className={isIncomesTabActive ? s.navBtnActive : s.navBtn}
            onClick={() => {
              setIsExpenses(false);
              handleToggle();
            }}
          >
            Доход
          </button>
        </div>
        <div className={s.shadowBigScreen}>
          <div className={s.form}>
            <TransactionForm
              transactionsType={isExpenses ? 'expenses' : 'incomes'}
            />
          </div>
          <div className={s.shadowSmallScreen}>
            <IncomesExpenseList
              transactions={isExpenses ? expenses : incomes}
              transactionsType={isExpenses ? 'expenses' : 'incomes'}
              operationSign={isExpenses ? '- ' : ''}
            />
          </div>
          <div className={s.summaryHolder}>
            <Summary
              className={s.summary}
              transactionsType={isExpenses ? 'expenses' : 'incomes'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DayReportView;
