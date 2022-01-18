import s from './Summary.module.css';
import PropTypes from 'prop-types';

const Summary = () => {
  const monthStats = {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 500,
    Май: 1000,
    Июнь: 'N/A',
    Июль: 'N/A',
    Август: 50,
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };

  return (
    <div className={s.section}>
      <h3 className={s.title}>Сводка</h3>
      <ul className={s.list}>
        {Object.entries(monthStats)
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

export default Summary;
