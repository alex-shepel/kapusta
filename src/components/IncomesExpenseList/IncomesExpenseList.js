import s from './IncomesExpenseList.module.css';
import IncomesExpenseListItem from '../IncomesExpenseListItem/IncomesExpenseListItem';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

const IncomesExpenseList = ({
  transactions,
  transactionsType,
  operationSign,
}) => {
  return (
    <>
      <div className={s.list}>
        <div className={s.header}>
          <span className={s.date}>Дата</span>
          <span className={s.description}>Описание</span>
          <span className={s.category}>Категория</span>
          <span className={s.amount}>Сумма</span>
        </div>
        {transactions.length > 0 ? (
          <ul className={s.transactionsList}>
            {transactions &&
              transactions.map(item => (
                <IncomesExpenseListItem
                  key={item.id}
                  itemProps={item}
                  transactionsType={transactionsType}
                  operationSign={operationSign}
                />
              ))}
          </ul>
        ) : (
          <ul className={s.ulPlaceholder}></ul>
        )}
      </div>
    </>
  );
};

export default IncomesExpenseList;
