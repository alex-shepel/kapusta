import s from './IncomesExpenseList.module.css';
import PropTypes from 'prop-types';
import IncomesExpenseListItem from 'components/IncomesExpenseListItem';

const IncomesExpenseList = ({
  transactions,
  transactionsType,
  operationSign,
}) => {
  return (
    <>
      <div className={s.list}>
        <ul className={s.header}>
          <li className={s.date}>Дата</li>
          <li className={s.description}>Описание</li>
          <li className={s.category}>Категория</li>
          <li className={s.amount}>Сумма</li>
        </ul>

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

IncomesExpenseList.propTypes = {
  transactions: PropTypes.array,
  transactionsType: PropTypes.string,
  operationSign: PropTypes.string,
};

export default IncomesExpenseList;
