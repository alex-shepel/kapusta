import s from './DayReportView.module.css';
import { useEffect, useState } from 'react';
import IncomesExpenseList from 'components/IncomesExpenseList';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchExpense, fetchIncome } from 'redux/transaction';
import Summary from 'components/Summary';
import TransactionForm from 'components/TransactionForm';
import Modal from 'components/Modal/Modal';
import ConfirmModal from 'components/ConfirmModal';

const startBalance = () => {};

const DayReportView = () => {
  const [isExpenses, setIsExpenses] = useState(true);

  const [isExpensesTabActive, setExpensesTabActive] = useState(true);
  const [isIncomesTabActive, setIsIncomesTabActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onLogOut = () => {
    console.log('log out');
  };

  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchCategories());
  }, [dispatch]);

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
          </div>
        </div>
        <div className={s.goToReport}>Перейти к отчетам</div>
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
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ConfirmModal
          onClose={() => {
            setIsModalOpen(false);
          }}
          title="Вы уверены?"
          onConfirm={onLogOut}
        />
      </Modal>
    </>
  );
};

export default DayReportView;
