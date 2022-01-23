import s from './ReportNavigation.module.css';
import { useState } from 'react';
import ReportBack from './ReportBack/ReportBack';
import ReportBalance from './ReportBalance/ReportBalance';
import ReportPeriod from './ReportPeriod';

const ReportNavigation = ({ pickedMonth, setPickedMonth }) => {
  const [lWidth, setLWidth] = useState(window.innerWidth);

  window.addEventListener(
    `resize`,
    event => {
      setLWidth(event.target.innerWidth);
    },
    false,
  );

  return (
    <>
      {lWidth >= 768 ? (
        <section className={s.reportNavigation}>
          <ReportBack />
          <ReportBalance />
          <ReportPeriod
            pickedMonth={pickedMonth}
            setPickedMonth={setPickedMonth}
          />
        </section>
      ) : (
        <section className={s.reportNavigation}>
          <ReportBack />
          <ReportPeriod
            pickedMonth={pickedMonth}
            setPickedMonth={setPickedMonth}
          />
          <ReportBalance />
        </section>
      )}
    </>
  );
};

export default ReportNavigation;
