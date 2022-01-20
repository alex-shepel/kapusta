import { useState } from 'react';
import ReportExpencesList from './ReportExpencesList/ReportExpencesList';
import ReportIncomesList from './ReportIncomesList/ReportIncomesList';
import s from './Report.module.css';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const Report = () => {

  const [change, setChange] = useState(true);

  return (
      <div className={s.reportMain}>
        <div className={s.reportNav}>
          <ArrowBackIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
          <span className={s.reportTitle}>{change ? 'Расходы' : 'Доходы'}</span>
          <ArrowForwardIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
        </div>
        {change ? <ReportExpencesList /> : <ReportIncomesList />}
      </div>
  );
};

export default Report;
