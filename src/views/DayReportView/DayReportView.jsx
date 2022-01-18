import s from './DayReportView.module.css';
import { useState } from 'react';
import IncomesExpenseList from 'components/IncomesExpenseList';
import Container from 'components/Container';
import Button from 'components/Button';
import { addIncome, fetchIncome } from 'redux/transaction';
import { useDispatch } from 'react-redux';

const DayReportView = () => {
  const [isExpenses, setIsExpenses] = useState(true);

  const [isExpensesTabActive, setExpensesTabActive] = useState(true);
  const [isIncomesTabActive, setIsIncomesTabActive] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsIncomesTabActive(!isIncomesTabActive);
    setExpensesTabActive(!isExpensesTabActive);
  };

  const add = () => {
    const credentials = {
      description: 'electricity',
      category: 'Доп. доход',
      amount: 100,
      date: new Date(),
    };
    dispatch(addIncome(credentials));
  };

  const get = () => {
    const incomes = dispatch(fetchIncome());
    console.log('incomes:', incomes);
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
      <Container>
        <Button type={'button'} title={'Add'} onClick={add} />
        <Button type={'button'} title={'Get'} onClick={get} />
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
            <div className={s.form}></div>
            <div className={s.shadowSmallScreen}>
              <IncomesExpenseList
                transactions={isExpenses ? expenses : incomes}
                transactionsType={isExpenses ? 'expenses' : 'incomes'}
                operationSign={isExpenses ? '- ' : ''}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DayReportView;
