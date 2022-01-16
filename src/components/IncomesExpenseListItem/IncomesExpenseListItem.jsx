import s from './IncomesExpenseListItem.module.css';
import PropTypes from 'prop-types';
import imageDelete from 'images/delete.svg';

const IncomesExpenseListItem = ({
  itemProps: { date, description, category, amount, id },
  transactionsType,
  operationSign,
}) => {
  return (
    <>
      <li className={s.listItem} key={id}>
        <div className={s.changeFlow}>
          <span className={s.date}>{date}</span>
          <span className={s.description}>{description}</span>
        </div>
        <span className={s.category}>{category}</span>
        <div className={s.flex}>
          <span
            className={transactionsType === 'incomes' ? s.incomes : s.expenses}
          >
            {operationSign}
            {Number(amount).toFixed(2)}
          </span>
          <span>
            <button type="button" className={s.delete} onClick={() => {}}>
              <img className={s.deleteIcon} src={imageDelete} alt="Delete" />
            </button>
          </span>
        </div>
      </li>
    </>
  );
};

IncomesExpenseListItem.propTypes = {
  itemProps: PropTypes.object,
  transactionsType: PropTypes.string,
  operationSign: PropTypes.string,
};

export default IncomesExpenseListItem;
