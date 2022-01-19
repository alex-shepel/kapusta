import s from './ReportIncomesList.module.css';
import sprite from '../icon.svg';
import category from './income.json';

const ReportIncomesList = ({ setActiveCategory, activeCategory }) => {
  const hendleClick = (e, label) => {
    // console.log(label);
    setActiveCategory(label);
  };

  return (
    <ul className={s.expenceReport}>
      {category.map(el => (
        <li
          onClick={e => hendleClick(e, el.label)}
          key={el.id}
          className={s.expenceReportItem}
        >
          <p className={s.expenceValue}>Value grn</p>
          <svg
            className={
              activeCategory === el.label ? s.expenceIconActive : s.expenceIcon
            }
          >
            <use xlinkHref={`${sprite}#${el.label}`} />
          </svg>
          <p className={s.expenceCategory}>{el.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReportIncomesList;
