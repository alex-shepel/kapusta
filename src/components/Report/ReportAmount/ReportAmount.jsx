import s from './ReportAmount.module.css';
import { getIncome } from 'services/kapusta-api';
import { getExpense } from 'services/kapusta-api';

const ReportAmount = () => {
  return (
    <section className={`${s.section} ${s.sectionReportAmount}`}>
      <ul className={s.reportAmount}>
        <li className={s.reportAmountItem}>
          <p className={s.amountCategory}>Расходы:</p>
          <span className={`${s.value} ${s.valueExpence}`}>-50 000 грн.</span>
        </li>
        <li className={s.reportAmountItem}>
          <p className={s.amountCategory}>Доходы:</p>
          <span className={`${s.value} ${s.valueIncome}`}>+50 000 грн.</span>
        </li>
      </ul>
    </section>
  );
};

export default ReportAmount;
