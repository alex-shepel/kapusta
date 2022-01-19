import React from 'react';
import sprite from '../icon.svg';
import category from './expence.json';
import s from './ReportExpencesList.module.css';

const ReportExpencesList = ({ setActiveCategory, activeCategory }) => {
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
          <p className={s.expenceValue}>500.00</p>
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

export default ReportExpencesList;
