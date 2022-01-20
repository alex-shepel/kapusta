import s from './ReportNavigation.module.css';
import { useState } from 'react';
import ReportBack from './ReportBack/ReportBack';
import ReportBalance from './ReportBalance/ReportBalance';
import ReportPeriod from './ReportPeriod';

const ReportNavigation = () => {
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
          <ReportPeriod />
          </section>
      ) : (

        <section className={s.reportNavigation}>
          <ReportBack />
          <ReportPeriod />
          <ReportBalance />
          </section>

      )}
      </>
  );
};

export default ReportNavigation;
