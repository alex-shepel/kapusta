import s from './Summary.module.css';
import PropTypes from 'prop-types';
import {
  getMonthStatsIncomes,
  getMonthStatsExpenses,
} from 'redux/transaction/selectors';
import { useSelector } from 'react-redux';

const Summary = ({ transactionsType }) => {
  const monthStatsIncomes = useSelector(getMonthStatsIncomes);
  const monthStatsExpenses = useSelector(getMonthStatsExpenses);

  const data =
    transactionsType === 'incomes' ? monthStatsIncomes : monthStatsExpenses;

  return (
    <div className={s.section}>
      <h3 className={s.title}>Сводка</h3>
      <ul className={s.list}>
        {Object.entries(data)
          .filter(([key, value]) => value !== 'N/A')
          .map(([key, value]) => (
            <li className={s.item} key={key}>
              <span className={s.itemMonthSum}>{key}</span>
              <span className={s.itemMonthSum}>{value}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

Summary.propTypes = {
  transactionsType: PropTypes.oneOf(['expenses', 'incomes']),
};

export default Summary;
