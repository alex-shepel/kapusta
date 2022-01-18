import s from './DayReportView.module.css';
import { useState } from 'react';
import IncomesExpenseList from 'components/IncomesExpenseList';
import Container from 'components/Container';
import Summary from 'components/Summary';
import TransactionForm from 'components/TransactionForm';

const DayReportView = () => {
  const [isExpenses, setIsExpenses] = useState(true);

  const [isExpensesTabActive, setExpensesTabActive] = useState(true);
  const [isIncomesTabActive, setIsIncomesTabActive] = useState(false);

  const handleToggle = () => {
    setIsIncomesTabActive(!isIncomesTabActive);
    setExpensesTabActive(!isExpensesTabActive);
  };

  const expenses = [
    {
      id: '1',
      date: '14.01.2022',
      description: 'Метро',
      category: 'Транспорт',
      amount: '30',
    },
    {
      id: '2',
      date: '14.01.2022',
      description: 'Бананы',
      category: 'Продукты',
      amount: '50',
    },
    {
      id: '3',
      date: '14.01.2022',
      description: 'Метро',
      category: 'Транспорт',
      amount: '30',
    },
    {
      id: '4',
      date: '14.01.2022',
      description: 'Бананы',
      category: 'Продукты',
      amount: '50',
    },
    {
      id: '5',
      date: '14.01.2022',
      description: 'Метро',
      category: 'Транспорт',
      amount: '30',
    },
    {
      id: '6',
      date: '14.01.2022',
      description: 'Бананы',
      category: 'Продукты',
      amount: '50',
    },
    {
      id: '7',
      date: '14.01.2022',
      description: 'Метро',
      category: 'Транспорт',
      amount: '30',
    },
    {
      id: '8',
      date: '14.01.2022',
      description: 'Бананы',
      category: 'Продукты',
      amount: '50',
    },
  ];

  const incomes = [
    {
      id: '1',
      date: '14.01.2022',
      description: 'Метро',
      category: 'Транспорт',
      amount: '30',
    },
    {
      id: '2',
      date: '14.01.2022',
      description: 'Бананы',
      category: 'Продукты',
      amount: '50',
    },
  ];

  return (
    <>
      <div className={s.section}>
        <div className={s.goToReport}></div>
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
            <Summary className={s.summary} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DayReportView;
