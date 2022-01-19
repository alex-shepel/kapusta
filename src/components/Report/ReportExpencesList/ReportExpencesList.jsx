import sprite from '../icon.svg';
import category from './expence.json';
import s from './ReportExpencesList.module.css';


const ReportExpencesList = () => {

  

  return (
    <ul className={s.expenceReport}>
      {category.map(el => (
        <li key={el.id} onClick={() => (el.label)} className={s.expenceReportItem}>
          <p className={s.expenceValue}>500.00</p>
          <svg className={s.expenceIcon}>
            <use xlinkHref={`${sprite}#${el.label}`} />
          </svg>
          <p className={s.expenceCategory}>{el.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReportExpencesList;
